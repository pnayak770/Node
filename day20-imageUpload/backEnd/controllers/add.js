import express from "express";
import { Add } from "../models/addmodel.js";


export const addImage=async(req,res)=>{
    // console.log(req.file);
    // console.log(req.body);
try {
    
    const {title,author,price,description}=req.body;
    const image=req.file.path;
    const addBook=new Add({title,author,price,description,image});
    const result=await addBook.save();
    res.status(201).json(result);
} catch (error) {
    res.status(500).json({message:error.message});
    
}

    
    
}