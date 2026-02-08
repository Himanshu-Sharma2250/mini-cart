import express from "express";
import { validateCartItem } from "../middlewares/validateCart.middleware.js";
import { addToCart, removeFromCart, updateQuantity } from "../controllers/cart.controller.js";

const cartRouter = express.Router();

cartRouter.post("/add/:productId", validateCartItem, addToCart);
cartRouter.patch("/remove/:productId", removeFromCart);
cartRouter.patch("/update/:productId", validateCartItem, updateQuantity);

export default cartRouter;