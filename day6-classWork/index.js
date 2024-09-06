import express from "express";
import morgon from "morgan";

const app=express();
const PORT=8081;

// const indiatime=new Date().toLocaleString()

app.use(morgon('dev'));

app.get('/',(req,res)=>{
    res.send('hello');
})

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));