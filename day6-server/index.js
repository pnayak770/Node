import http from "http";

let cars = [
    { id: 1, model: "tata", make: 2000 },
    { id: 2, model: "maruti", make: 2000 },
    { id: 3, model: "honda", make: 2000 },
    { id: 4, model: "mahindra", make: 2000 },
    { id: 5, model: "toyota", make: 2000 },
    { id: 6, model: "ford", make: 2000 },
  ];
  const port = 8080;

  const server=http.createServer((req,res)=>{
if(req.method=='GET'){

    
    res.writeHead(200,{'Content-Type':'application/json'}) //setting header
    res.end(JSON.stringify(cars)) //sending response
}else if(req.method=='POST'){
    let newCar="";
    req.on('data',(buffer)=>{
        // console.log(buffer.stringify());
        newCar+=buffer.toString();
        
    })
    req.on('end',()=>{
        newCar=JSON.parse(newCar);
        cars.push(newCar);
        res.writeHead(201,{'Content-Type':'application/json'}) //setting header
        res.end(JSON.stringify(cars)) //sending response
    })
}else if(req.method=='PUT'){
    let newCar="";
    req.on('data',(buffer)=>{
        // console.log(buffer.stringify());
        newCar+=buffer.toString();
        
    })
    req.on('end',()=>{
        newCar=JSON.parse(newCar);

        let upDatecar=cars.map((car)=>{
           return car.id==newCar.id?newCar:car
        })
        res.writeHead(201,{'Content-Type':'application/json'}) //setting header
        res.end(JSON.stringify(upDatecar)) //sending response
    })
}

  })

  server.listen(port,()=>console.log(`server is running on port ${port}`))