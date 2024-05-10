const Student=require('../models/project.model');
const uploadOnCloudinary=require('../utils/cloudinary');

const projectUpload=async(req,res)=>{
    try{
        const {name,email,github,hosted}=req.body;
        const student=await Student.findOne({email:email});
        if(!student)
        {
            return res.status(400).json({message:"Student not found"});
        }
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cloudinaryResponse = await uploadOnCloudinary(dataURI);
        await Student.findOneAndUpdate({email:email},{project:cloudinaryResponse.secure_url,github:github,hosted:hosted},{upsert:true});
        res.status(200).json({message:"Project uploaded successfully"});
    }
    catch(err){
        res.status(500).json({error:"Internal server error"});
    }
}

module.exports=projectUpload;