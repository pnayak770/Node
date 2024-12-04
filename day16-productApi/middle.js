import express from "express";


const router=express.Router();

const products=[
    {
        id:1,
        name:"tata",
        price:2000
    },
    {
        id:2,
        name:"maruti",
        price:2000
    },
    {
        id:3,
        name:"honda",
        price:2000
    },
    {
        id:4,
        name:"mahindra",
        price:2000
    },  
]

router.get("/product",(req,res)=>{
    console.log(req.query.productId);

    const filterProduct=products.filter((item)=> item.id==req.query.productId);
    
    res.json({
        succes:true,
        msg:"dumy product",
        results:products,
    })
})

export default router