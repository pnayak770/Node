import express, { Router } from "express";
import mongoose from "mongoose";
import router from "./routes/routes.js";
import cors from "cors";

const PORT=8080;


const app=express();
app.use(cors({origin:'http://localhost:5173'}))
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/',router)



mongoose.connect('mongodb://127.0.0.1:27017/practice').then(()=>{
    
    app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
}
).catch((err)=>{
    console.log(err);

})




