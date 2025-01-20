import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./components/ProductCard";

const Product = () => {
    // Fetch product data from an API
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    // const backendUrl = process.env.REACT_APP_BACKEND_URL;
    // router.route("/product/:id").get(getProductById);
    // const response = await axios.get(
    //     `${backendUrl}/api/v1/products/product/${id}`
    // );

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
                const response = await axios.get(
                    `${BACKEND_URL}/api/v1/products/product/${id}`
                );
                setProduct(response.data.product[0]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id]);

    return (
        <div className="bg-[#ecffe9] pb-40">
            <div className="lg:px-28 md: sm: px-4 w-full ">
                {product && <ProductCard product={product} />}
            </div>
        </div>
    );
};

export default Product;
