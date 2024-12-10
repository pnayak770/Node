import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import { startServer } from "./dataBase/connection.js";
import bookRouter from "./routes/bookRoutes.js";


const app=express();
const port=process.env.PORT;

app.use(cors({origin:"http://localhost:5173"}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use("/api",bookRouter);

await startServer();

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})


