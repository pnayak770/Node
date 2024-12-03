import userModel from "../model/userModel.js";

export async function getAllUsers (req,res){
    const dataFromDB=await userModel.find()
    res.send(dataFromDB); 
}

export async function saveNewUser(req,res){
    const newuser=new userModel(req.body);
    await newuser.save();
    res.send("new user added");
}

// export {getAllUsers,saveNewUser}
