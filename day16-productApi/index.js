import express from "express";
import middle from "./middle.js";


const app=express();

app.use("/product",middle);




app.listen(8080,()=>{
    console.log("server started at port 8080");
})