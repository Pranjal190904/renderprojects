const Student=require('../models/project.model');
const uploadOnCloudinary=require('../utils/cloudinary');
const {recapchaSecret}=require('../config/env.config');
const axios=require('axios');

const projectUpload=async(req,res)=>{
    try{
        const {name,email,github,hosted,token}=req.body;
        const student=await Student.findOne({email:email});
        const response=await axios.post( `https://www.google.com/recaptcha/api/siteverify?secret=${recapchaSecret}&response=${token}`);
        if(!response.data.success || response.data.score<0.5)
        {
            return res.status(400).json({message:"recapcha not verified"});
        }
        if(!student)
        {
            return res.status(404).json({message:"Email not Registered"});
        }
        if(req.file.size>1024*1024*10)
        {
            return res.status(400).json({message:"File size should be less than 10MB"});
        }
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cloudinaryResponse = await uploadOnCloudinary(dataURI);
        await Student.findOneAndUpdate({email:email},{project:cloudinaryResponse.secure_url,github:github,hosted:hosted,projectSubmitted:true},{upsert:true});
        return res.status(200).json({message:"Project uploaded successfully"});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error:"Internal server error"});
    }
}

module.exports=projectUpload;