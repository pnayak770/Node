import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

const userModel=mongoose.model('student',userSchema);

export default userModel;