import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

// dotenv.config();

const app=express();
const port=8082;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello');
})

app.listen(port,()=>console.log(`server is running on port ${port}`))

