import mongoose from "mongoose";
import { Product } from "../models/product.models.js";

const getAllProducts = async (req, res) => {
    try {
        // Get all products from the Product model
        const products = await Product.find({});

        return res.status(200).json({
            message: "List of all products",
            products: products,
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            status: 500,
            error: error.message,
        });
    }
};

const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.find({
            productId: productId,
        });
        return res.status(200).json({
            message: "Product found",
            product: product,
            status: 200,
        });
    } catch (error) {
        console.log(error);
    }
};

const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        return res.status(201).json({
            message: "Product created successfully",
            product: product,
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            status: 500,
            error: error.message,
        });
    }
};

export { getAllProducts, getProductById, createProduct };
