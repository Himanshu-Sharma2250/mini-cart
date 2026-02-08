import express from "express";
import { validateProduct } from "../middlewares/validateProduct.middleware.js";
import { createProduct, getProducts } from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post("/add", validateProduct, createProduct);
productRouter.get("/", getProducts);

export default productRouter;