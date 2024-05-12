const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    project:{
        type:String,
        required:true
    },
    github:{
        type:String
    },
    hosted:{
        type:String
    },
    projectSubmitted:{
        type:Boolean,
        default:false
    }
});

module.exports=mongoose.model('Student',studentSchema);