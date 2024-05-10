const mongoose=require('mongoose');
const { dbUrl } = require('./env.config');

const connectDB=async()=>{
    try{
        await mongoose.connect(dbUrl);
    }
    catch(err){
        console.log("Database connection failed");
    }
}

module.exports=connectDB;