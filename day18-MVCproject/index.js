import express from "express";
import productList from "./route/product.route.js";
import checkout from "./route/checkout.route.js";



const app=express();

app.use(productList);
app.use(checkout);









app.listen(8080,()=>{
    console.log("server started at port 8080");
})