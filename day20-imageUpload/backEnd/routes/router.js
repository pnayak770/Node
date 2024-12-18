import express from "express";
const router = express.Router();

router.post("/add", addImage);

export default router;