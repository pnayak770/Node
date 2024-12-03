import express from 'express'

const app=express();
const PORT=8080;

const imageUrls = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/300/400',
    'https://picsum.photos/400/500',
    'https://picsum.photos/500/600',
    'https://picsum.photos/600/700'
];
console.log(imageUrls.length)

app.get('/randomImage',(req,res)=>{
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];

    res.send(`<img src="${randomImageUrl}" />`);
})

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));