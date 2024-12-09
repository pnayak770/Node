import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";


const app=express();

const port=process.env.PORT; 

app.use(cors({origin:"http://localhost:5173"}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


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


 app.post("/api/add/book",async (req,res)=>{

    try {
        
        const {title,author,price,description,publisher}=req.body;
        const newBook=new Books({
            title,
            author,
            price,
            description,
            publisher
    
        });
        await newBook.save();
        res.status(201).send({message:"book added successfully"});
    } catch (error) {
        res.status(500).send({message:"book not added"});
        
    }
 }

 );
// app.put();
// app.delete();



startServer();


