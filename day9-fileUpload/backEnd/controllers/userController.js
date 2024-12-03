import userModel from "../models/userModel.js";

export async function addNewUser(req,res){
    console.log(req.body);
    

    const {name,email}=req.body;
    const photo=req.file.path;
    const dataTOSave=new userModel({name,email,photo});
    const isDataSaved =await dataTOSave.save();

    if(isDataSaved){
        res.status(201).send({message:"data saved successfully"});
    }else{
        res.status(400).send({message:"data not saved"});
    }
    


}