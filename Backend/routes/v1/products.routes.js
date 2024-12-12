import express from "express";
const router = express.Router();

import { getAllProducts, getProductById, createProduct } from "../../controllers/product.controller.js";

// Example product routes
router.get("/", (req, res) => {
    res.json({ message: "List of all products" });
});

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProductById);

router.route("/product").post(createProduct);

export default router;
