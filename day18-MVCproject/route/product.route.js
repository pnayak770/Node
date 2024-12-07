import express from "express";

const router=express.Router();

router.get("/product/list",)

router.get("/product-review",)

router.get("/product-rate",(req,res)=>{
    res.json({
        succes:true,
    })
})


 export default router