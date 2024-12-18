import mongoose from "mongoose";


export async function connectToDB(){

    await mongoose.connect("mongodb://127.0.0.1:27017/imageUpload");

}