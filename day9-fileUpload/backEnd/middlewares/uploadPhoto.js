import { log } from "console";
import multer from "multer";
import path from "path";
import {v4 as uuidv4} from "uuid";

const diskStorageOptions=multer.diskStorage({

    destination: "uploads/",
  filename: function (req, file, callback) {
    const randomString = uuidv4();
    const ext = path.extname(file.originalname);
   console.log(ext);
   
    const filename = req.body.name + "-" + randomString + ext;
    callback(null, filename);
  },
  fileSize: 1048576

})

const uploadPhoto=multer({storage:diskStorageOptions});
export default uploadPhoto;