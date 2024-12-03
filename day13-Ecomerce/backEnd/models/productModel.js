
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    inStock: { type: Boolean, default: true },
    inventory: { type: Number, required: true },
    addedBy: { type: mongoose.Types.ObjectId, required: true },
  },
  { timestamps: true }
);
export const productModel = mongoose.model("product", productSchema);
