import express from "express";



const app=express();

app.use("/product",middle);




app.listen(8080,()=>{
    console.log("server started at port 8080");
})