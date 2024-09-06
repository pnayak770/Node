import express from "express"
import { logger } from "./middleware/middleware.js";

const app=express();
const PORT=8080;

app.get('/log',logger,(req,res)=>{
    res.send('hello nayak')
})

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))