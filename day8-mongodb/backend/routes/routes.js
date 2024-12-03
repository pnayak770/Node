import { getAllUsers ,saveNewUser} from "../controllers/userController.js";
import express from "express";

const router=express.Router();

router.get("/users",getAllUsers);
router.post("/newUser",saveNewUser)

export default router;