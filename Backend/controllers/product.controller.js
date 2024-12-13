import mongoose from "mongoose";
import { Product } from "../models/product.models.js";

const getAllProducts = async (req, res) => {
    try {
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

const getProductByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const products = await Product.find({ category: category });
        return res.status(200).json({
            message: "List of products by category",
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

const getAllProductsStructuredByCategory = async (req, res) => {
    try {
        const products = await Product.find({});
        const topRated = await Product.find({ rating: { $gt: 4.7 } });
        const topOffer = await Product.find({ discount: { $gt: 0.19 } });
        const todaysDeal = await Product.aggregate([
            { $sample: { size: 30 } },
        ]);
        let structuredProducts = {};
        products.forEach((product) => {
            if (structuredProducts[product.category]) {
                structuredProducts[product.category].push(product);
            } else {
                structuredProducts[product.category] = [product];
            }
        });
        structuredProducts["Top Rated"] = topRated;
        structuredProducts["Top Offer"] = topOffer;
        structuredProducts["Todays Deal"] = todaysDeal;
        return res.status(200).json({
            message: "List of products structured by category",
            products: structuredProducts,
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

export {
    getAllProducts,
    getProductById,
    createProduct,
    getProductByCategory,
    getAllProductsStructuredByCategory,
};
