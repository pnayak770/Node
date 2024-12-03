import express from "express";

const app=express();


app.get("/todos",(req,res)=>{
    console.log("todos request recived")
    const data = [
             {
             id: 1,
              title: "First api",
            },
            {
              id: 2,
               title: "xyasdja",
            },
          ];
           res.status(200).send(data);
          

});

app.get("/users",(req,res)=>{

})

app.get("/products",(req,res)=>{

})

app.use("*", (req, res) => {
       res.status(404).json({
        message: "Route not found",
       });
     })

app.listen(8080,()=>{
    console.log("server is started at port number 8080");
    

})