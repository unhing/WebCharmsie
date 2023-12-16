import mongoose from "mongoose";
import { EProductCategory } from "../enums/product";

const Schema = mongoose.Schema;

const product = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: EProductCategory,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  sku: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Product = mongoose.model("Product", product);

export default Product;
