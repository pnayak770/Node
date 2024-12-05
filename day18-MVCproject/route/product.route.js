import express from "express";

const router=express.Router();

router.get("/product/list",(req,res)=>{
    res.json({
        succes:true,
    })
})

router.get("/product-review",(req,res)=>{
    res.json({
        succes:true,
    })
})

router.get("/product-rate",(req,res)=>{
    res.json({
        succes:true,
    })
})


 export default router