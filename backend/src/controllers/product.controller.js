import { Product } from "../models/product.model.js";

export const createProduct = async (req, res) => {
    try {
        const {name, price, imageUrl, description} = req.body;

        const product = await Product.create({
            name,
            price,
            image: imageUrl,
            description
        });

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product: product
        })
    } catch (error) {
        console.log("Error creating product: ", error);
        res.status(500).json({
            success: false,
            message: "Error creating product"
        })
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        if (!products) {
            return res.status(404).json({
                success: false,
                message: "Products not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            products: products
        })
    } catch (error) {
        console.log("Error fetching product: ", error);
        res.status(500).json({
            success: false,
            message: "Error fetching product"
        })
    }
}