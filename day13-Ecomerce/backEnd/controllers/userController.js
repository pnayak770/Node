import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../services/tokenGenrate.js";

export async function registerUser (req, res) {

try{

    const {firstName,lastName,email,password,role}=req.body;

    const hashedPassword=await bcrypt.hash(password,10);
    console.log(hashedPassword);

    const user=new userModel({
        firstName,
        lastName,
        email,
        password:hashedPassword,
        role
    })
    await user.save();
    res.status(201).send({message:"user created successfully"});
}catch(err){
    console.log(err);
    res.status(500).send({message:"internal server error"});
}

}

export async function loginUser(req, res) {

    const { email, password } = req.body;

    const checkUser = await userModel.findOne({ email }).exec();
    if (checkUser) {
        const isMatch = await bcrypt.compare(password, checkUser.password);
        const token = generateToken(checkUser);
        if (isMatch) {
            res.cookie(
                "auth_token",token,{
                    httpOnly: true,
                    secure: false, //as we are working with localhost, which runs on http, not on https
                    sameSite: "strict",
                    maxAge: 3600000,   
                }
            ).status(200).send({message:"login success"});
        } else {
            res.status(404).send({message:"login failed"});
        }
    } else {
        res.status(404).send({message:"login failed"});
    }


}


export async function logoutUser (req,res){

    res.clearCookie("auth_token",
    {
        httpOnly: true,
        secure: false, //as we are working with localhost, which runs on http, not on https
        sameSite: "strict",
       
    }

    ).status(200).send({message:"logout success"});
}