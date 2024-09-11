import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import "dotenv/config";

const PORT=8080;
const app=express();


app.use(cors({origin:'*'}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.post('/sendEmail',(req,res)=>{
    const {name,email,message}=req.body;
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD,
        }
});

let msg={
    from:process.env.EMAIL,
    to:process.env.EMAIL,
    subject:'email from someone',
    text:`name: ${name} with email: ${email} has a message for you :- ${message}`,
}


transporter.sendMail(msg)
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
    
})
})

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))