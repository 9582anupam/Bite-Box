import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import ProductCardSkeleton from "./components/ProductCardSkeleton";

const Product = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
                const response = await axios.get(
                    `${BACKEND_URL}/api/v1/products/product/${id}`
                );
                setProduct(response.data.product[0]);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    return (
        <div className="bg-[#ecffe9] pb-40">
            <div className="lg:px-28 md:sm:px-4 w-full">
                {loading ? (
                    <ProductCardSkeleton />
                ) : product ? (
                    <ProductCard product={product} />
                ) : (
                    <p className="text-center text-xl font-semibold">
                        Product not found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Product;
