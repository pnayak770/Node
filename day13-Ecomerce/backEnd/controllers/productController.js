import { productModel } from "../models/productModel.js";

export async function createProduct(req, res) {
    try {
      let {
        name,
        brand,
        category,
        price,
        description,
        inStock,
        inventory,
        addedBy,
      } = req.body;
      const product = new productModel({
        name,
        brand,
        category,
        price,
        description,
        inStock,
        inventory,
        addedBy,
      });
      await product.save();
      res.status(201).json({ message: "product added" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
  