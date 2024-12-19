import mongoose from "mongoose";


const addSchema=new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    price:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true}
})

export const Add=mongoose.model("add",addSchema);