import express from "express";
import {
  createProduct,
//   getAllProducts,
//   deleteProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/", createProduct);
// productRouter.get("/", getAllProducts);
// productRouter.delete("/:id", deleteProduct);

export default productRouter;

