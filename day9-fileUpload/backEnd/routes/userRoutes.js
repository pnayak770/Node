import express from "express";
import {addNewUser} from "../controllers/userController.js"
import uploadPhoto from "../middlewares/uploadPhoto.js";
import multer from "multer";

const router=express.Router();

router.post("/addUser",uploadPhoto.single("photo"),addNewUser)

export default router