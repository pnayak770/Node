import express from 'express';
import jobRoutes from './routes/jobRoutes.js';
import mongoose from 'mongoose';
import jobModel from './model/jobModel.js';
import "dotenv/config";

const app=express();
const PORT=8081;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//for redirecrt any kind of request

mongoose.connect(process.env.MONGO_URL).then(()=>{
   
    app.listen(PORT,()=>(console.log(`server is running on port ${PORT}`)));
}).catch((err)=>{
    console.log(err);

})

app.use('/api',jobRoutes);


