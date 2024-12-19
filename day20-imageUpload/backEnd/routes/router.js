import express from "express";
import { addImage } from "../controllers/add.js";
import multer from "multer";
import path from "path";


const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve('uploads/'));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

      const ext = path.extname(file.originalname);


      cb(null, file.fieldname + '-' + uniqueSuffix + ext)
    }
  })
  
  const upload = multer({ storage: storage })






router.post("/add",upload.single("image"), addImage);

export default router;