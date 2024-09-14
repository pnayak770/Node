import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})


const jobModel=mongoose.model('job',jobSchema);

 export default jobModel