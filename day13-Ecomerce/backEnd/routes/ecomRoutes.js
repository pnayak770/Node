import express from 'express';
import {registerUser,loginUser,logoutUser} from '../controllers/userController.js'



export const ecomRouter=express.Router();

ecomRouter.post("/user/register",registerUser);

ecomRouter.post("/user/login",loginUser);

ecomRouter.post("/user/logout",logoutUser);

