import express from "express";

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why couldn't the bicycle stand up by itself? It was two-tired.",
    "Why don’t programmers like nature? It has too many bugs.",
    "How does a penguin build its house? Igloos it together.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why was the math book sad? It had too many problems.",
    "What do you call a fish with no eyes? Fsh!",
    "Why can’t your nose be 12 inches long? Because then it would be a foot.",
    "Why did the coffee file a police report? It got mugged!",
    "Why are elevator jokes so good? They work on many levels.",
    "Why did the computer go to the doctor? It had a virus!",
    "What’s orange and sounds like a parrot? A carrot!",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "What do you call a boomerang that doesn’t come back? A stick.",
    "What’s brown and sticky? A stick.",
    "Why did the chicken go to the séance? To talk to the other side."
];




const app=express();

app.get("/randomJokes",(req,res)=>{
    let index=Math.floor(Math.random()*20)
    res.status(200).send(jokes[index]);
})

app.get("/allJokes",(req,res)=>{
    const{limit}=req.query;
    console.log(limit)
})


app.listen(8080,()=>{
    console.log("server started at port 8080");
})