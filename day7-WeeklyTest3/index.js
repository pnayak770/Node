import express from "express";
import {validate} from "./middleware/nameValidation.js";
import { password } from "./middleware/password.js";
import {emailValidate} from "./middleware/email.js"
import {numberValidate} from "./middleware/phoneNumber.js"
const app=express();
const PORT=8080;

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('hello');
})

app.post('/register',validate,(req,res)=>{

    res.send('registered successfully')
    
})

app.post('/password',password,(req,res)=>{

    res.send('registered successfully')
    
})

app.post('/addEmail',emailValidate,(req,res)=>{

    res.send('registered successfully')
    
})

app.post('/PhoneNumber',numberValidate,(req,res)=>{

    res.send('registered successfully')
    
})



app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))