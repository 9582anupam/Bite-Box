import mongoose from "mongoose";
import { Product } from "../models/product.models.js";
import { capitalizeWords } from "../helper/capitalizeWords.js";

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
        const category = capitalizeWords(req.params.category);

        // Special categories with custom logic
        const specialCategories = {
            "Today's Deal": async () =>
                await Product.aggregate([{ $sample: { size: 30 } }]),
            "Top Rated": async () =>
                await Product.find({ rating: { $gt: 4.7 } }),
            "Offers": async () => await Product.find({ discount: { $gt: 0.19 } }),
        };

        // Check if the category is a special category
        if (specialCategories[category]) {
            const products = await specialCategories[category]();
            return res.status(200).json({
                message: `List of products in special category '${category}'`,
                products,
                status: 200,
            });
        }

        // Fetch products by regular category
        const products = await Product.find({ category });

        if (products.length > 0) {
            return res.status(200).json({
                message: `List of products in category '${category}'`,
                products,
                status: 200,
            });
        }

        // No products found
        return res.status(404).json({
            message: `No products found in category '${category}'`,
            status: 404,
        });
    } catch (error) {
        console.error(error);
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
        const todaysDeal = await Product.aggregate([{ $sample: { size: 30 } }]);
        let structuredProducts = {};
        products.forEach((product) => {
            if (structuredProducts[product.category]) {
                structuredProducts[product.category].push(product);
            } else {
                structuredProducts[product.category] = [product];
            }
        });
        structuredProducts["Top Rated"] = topRated;
        structuredProducts["Offers"] = topOffer;
        structuredProducts["Today's Deal"] = todaysDeal;
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

const updateProductPrices = async (req, res) => {
    try {
      // Update all documents with a random price between 50 and 200
      const result = await Product.updateMany(
        {},
        [
            {
              $set: {
                rating: {
                  $multiply: [
                    { $floor: { $multiply: [{ $rand: {} }, 11] } },  // Random value from 0 to 10
                    0.5  // Step size of 0.5
                  ]
                }
              }
            }
          ]
          
          
      );
  
      // Send response with matched and modified document counts
      return res.status(200).json({
        message: `Matched ${result.matchedCount} documents and modified ${result.modifiedCount} documents`,
      });
  
    } catch (err) {
      console.error('Error updating prices:', err);
      return res.status(500).json({ message: 'Server error' });
    }
  };

export {
    getAllProducts,
    getProductById,
    createProduct,
    getProductByCategory,
    getAllProductsStructuredByCategory,
    updateProductPrices,
};
