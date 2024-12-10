import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true

    },
    description:{
        type:String,
        required:true,
    },
    publisher:{
        type:String,
        required:true
    }
})

const Books=mongoose.model("Book",BookSchema);

export default Books;