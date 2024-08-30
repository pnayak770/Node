import express from 'express';


let app=express();
const port = 8080;

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you get if you cross a snowman and a vampire? Frostbite."
];



app.get('/joke',(req,res)=>{
    let joke=jokes[Math.floor(Math.random()*jokes.length)];
    res.send(joke)
    
})

// app.get('/random',(req,res)=>{
//     res.send(Math.random().toString())
// })


app.listen(port,()=>console.log(`server is running on port ${port}`));