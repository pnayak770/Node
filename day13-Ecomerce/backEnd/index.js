import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import {ecomRouter} from './routes/ecomRoutes.js';
import mongoose from 'mongoose';
import productRouter from './routes/productRouter.js';


const PORT=8000;
const app=express();

app.use(cors({origin:'*'}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/api", ecomRouter);
app.use("/api/product", productRouter);

try {
  await mongoose.connect(
    `mongodb+srv://pintunayak770:${process.env.MONGO_PASSWORD}@cluster0.3ncp8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );
  app.listen(PORT, () => console.log(`SERVER STARTED AT PORT ${PORT}`));
} catch (err) {
  console.log(err);
}