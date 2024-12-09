import express from "express";
import mongoose from "mongoose";
import "dotenv/config";


const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const port=process.env.PORT; 

async function startServer(){

    try {
        await mongoose.connect(process.env.MONGODBURL)
        app.listen(port,()=>{
            console.log(`server started at port ${port}`);
        })
        
    } catch (error) {
        console.log("error connecting to the db")
        
    }
}



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
//fetch all books

 app.get("/api/get/books",async (req,res)=>{

const allBooks=await Books.find();
res.send(allBooks);

 });


 app.post("/api/add/book",(req,res)=>{

 }

 );
// app.put();
// app.delete();



startServer();


