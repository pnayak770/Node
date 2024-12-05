import express from "express";



const app=express();
app.use(express.static("./image"));

const products=[
    {
        id:1,
        title:"mobile",
        image:"http://localhost:8080/parmeshwar.jpeg",

    }
]

app.get("/products",(req,res)=>{
    res.json({
        succes:true,
        msg:"all are good",
        result:products
    })
})

app.listen(8080,()=>{
    console.log("server started at port 8080");
})