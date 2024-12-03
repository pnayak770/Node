import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/userRoutes.js";

const PORT=8080;
const app=express();

mongoose.connect('mongodb://127.0.0.1:27017/fileUpload').then(()=>{
    app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
}).catch((err)=>{
    console.log(err);
})

app.use(cors({origin:'http://localhost:5173'}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/uploads", express.static("uploads"));
app.get('/abc',(req,res)=>{
    res.send("hello")
})

app.use('/',router);

// app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))




