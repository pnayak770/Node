import express from 'express';
import cors from 'cors';
import  'dotenv/config';
import { connectToDB } from './db/connection.js';
import router from './routes/router.js';

const port=process.env.PORT;

const app=express();

await connectToDB();

app.use(cors({origin:"http://localhost:5173"}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use("/api",router);

app.listen(port,()=>{
    console.log(`server started at ${port}`)
});


