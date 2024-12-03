import express, { urlencoded } from 'express'

const app=express();
const PORT=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


let cars = [
    { id: 1, model: "tata", make: 2000 },
    { id: 2, model: "maruti", make: 2000 },
    { id: 3, model: "honda", make: 2000 },
    { id: 4, model: "mahindra", make: 2000 },
    { id: 5, model: "toyota", make: 2000 },
    { id: 6, model: "ford", make: 2000 },
  ];

  const hostname="127.0.0.1";

  app.get('/products',(req,res)=>{
      res.status(200).send(cars);
  })

  app.post('/Addproduct',(req,res)=>{
     const newCar=req.body;
     cars.push(newCar);
     res.status(201).send(cars);
      
  })

  app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));