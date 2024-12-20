import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Filter from "./Filter"; // Import Filter component
import Products from "./Products"; // Import Products component
import "./category.css";

const Category = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id: category } = useParams();
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [discountRange, setDiscountRange] = useState([0, 1000]);
    const [ratingValue, setRatingValue] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    // Check screen width on mount and on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1024); // Set to true for screens wider than 'lg' (1024px)
        };

        handleResize(); // Check on initial render
        window.addEventListener("resize", handleResize); // Add resize event listener

        return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
    }, []);

    useEffect(() => {
        // Reset the scroll position when the component is mounted or category changes
        window.scrollTo(0, 0);

        const fetchProducts = async () => {
            try {
                const backendUrl = process.env.REACT_APP_BACKEND_URL;
                const response = await axios.get(
                    `${backendUrl}/api/v1/products/category/${category}?priceMin=${priceRange[0]}&priceMax=${priceRange[1]}&discountMin=${discountRange[0]}&discountMax=${discountRange[1]}&rating=${ratingValue}`
                );
                setProducts(response.data.products);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(true);
            }
        };
        fetchProducts();
    }, [category, priceRange, discountRange, ratingValue]);

    return (
        <div className="bg-[#F5FBF4]">
            <div className="lg:px-20 md: sm:px-4 w-full">
                <p className="text-center text-5xl font-bold py-6">
                    {category}
                </p>
                <div className="flex justify-between">
                    {/* Filters Sidebar */}
                    <Filter
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        discountRange={discountRange}
                        setDiscountRange={setDiscountRange}
                        ratingValue={ratingValue}
                        setRatingValue={setRatingValue}
                        isLargeScreen={isLargeScreen}
                    />

                    {/* Products List */}
                    <Products products={products} loading={loading} />
                </div>
            </div>
        </div>
    );
};

export default Category;
