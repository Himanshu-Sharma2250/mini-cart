import { Cart } from "../models/cart.model.js";

export const addToCart = async (req, res) => {
    try {
        const {productId} = req.params;
        const {quantity} = req.body;

        const existingProduct = await Cart.findOne({
            productId
        });

        if (existingProduct) {
            return res.status(400).json({
                success: false,
                message: "Product already exist in cart"
            })
        }

        const cart = await Cart.create({
            productId,
            quantity
        })

        res.status(201).json({
            success: true,
            message: "Product added to cart successfully",
            cart: cart
        })
    } catch (error) {
        console.error("Error adding product in cart: ", error);
        res.status(500).json({
            success: false,
            message: "Error adding product in cart"
        })
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const {productId} = req.params;

        const existingProduct = await Cart.findOneAndDelete({
            productId
        });

        if (!existingProduct) {
            return res.status(400).json({
                success: false,
                message: "Product does not exist in cart"
            })
        }

        res.status(200).json({
            success: true,
            message: "Product removed from the cart"
        })
    } catch (error) {
        console.error("Error removing product from cart: ", error);
        res.status(500).json({
            success: false,
            message: "Error removing product from cart"
        })
    }
};

export const updateQuantity = async (req, res) => {
    try {
        const {productId} = req.params;
        const {quantity} = req.body;

        const existingProduct = await Cart.findOneAndUpdate(
            {
                productId
            },
            {
                quantity
            }
        );

        if (!existingProduct) {
            return res.status(400).json({
                success: false,
                message: "Product does not exist in cart"
            })
        }

        res.status(200).json({
            success: true,
            message: "Product's quantity updated successfully"
        })
    } catch (error) {
        console.error("Error updating product's quantity: ", error);
        res.status(500).json({
            success: false,
            message: "Error updating product's quantity"
        })
    }
};