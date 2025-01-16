import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Filter from "./components/Filter"; // Import Filter component
import Products from "./components/Products"; // Import Products component
import "./category.css";
import SortDropdown from "./components/SortDropdown";
import SortDialog from "./components/SortDialog";
import FilterDialog from "./components/FilterDialog";

const Category = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id: category } = useParams();
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [discountRange, setDiscountRange] = useState([0, 1000]);
    const [ratingValue, setRatingValue] = useState(0);
    // const [isLargeScreen, setIsLargeScreen] = useState(true);
    const [isFilterChange, setIsFilterChange] = useState(false);
    const [sortBy, setSortBy] = useState("Featured");
    const [isSortChange, setIsSortChange] = useState(false);

    useEffect(() => {
        console.log("sortby", sortBy);
        console.log("price range", priceRange);
        console.log("discount range", discountRange);
        console.log("rating value", ratingValue);
    }, [sortBy, priceRange, discountRange, ratingValue]);

    // used for displaying rating stars large/small based on screen size
    // Check screen width on mount and on window resize
    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsLargeScreen(window.innerWidth > 1024); // Set to true for screens wider than 'lg' (1024px)
    //     };

    //     handleResize(); // Check on initial render
    //     window.addEventListener("resize", handleResize); // Add resize event listener

    //     return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
    // }, []);

    useEffect(() => {
        // Reset the scroll position when the component is mounted or category changes
        window.scrollTo(0, 0);

        const fetchProducts = async () => {
            try {
                const backendUrl = process.env.REACT_APP_BACKEND_URL;
                // const response = await axios.get(
                //     `${backendUrl}/api/v1/products/category/${category}?priceMin=${priceRange[0]}&priceMax=${priceRange[1]}&discountMin=${discountRange[0]}&discountMax=${discountRange[1]}&rating=${ratingValue}`
                // );/
                const response = await axios.get(
                    `${backendUrl}/api/v1/products/category/${category}`
                );
                setProducts(response.data.products);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(true);
            }
        };
        fetchProducts();
    }, [category]);

    return (
        <div className="bg-[#ecffe9]">
            <div className="lg:px-20 md: sm:px-4 w-full">
                <div className="flex justify-center relative">
                    <p className="text-center text-5xl font-bold py-6">
                        {category}
                    </p>

                    {/* Sorting Dropdown */}
                    <div className="absolute right-8 top-8 hidden md:block">
                        <SortDropdown
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            isSortChange={isSortChange}
                            setIsSortChange={setIsSortChange}
                        />
                    </div>
                </div>

                <div className="flex justify-between relative">
                    {/* Filters Sidebar */}
                    <div className="hidden md:block sticky p-2 px-4 lg:px-10 top-56 mb-28 lg:w-1/4 min-w-[30%] h-fit bg-white rounded-lg shadow-lg">
                        <Filter
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            discountRange={discountRange}
                            setDiscountRange={setDiscountRange}
                            ratingValue={ratingValue}
                            setRatingValue={setRatingValue}
                            // isLargeScreen={isLargeScreen}
                            isFilterChange={isFilterChange}
                            setIsFilterChange={setIsFilterChange}
                        />
                    </div>

                    {/* Products List */}
                    <Products products={products} loading={loading} />

                    <div className="fixed right-6 bottom-6 flex gap-2 md:hidden">
                        {/* Sorting Dialog */}
                        <SortDialog
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            isSortChange={isSortChange}
                            setIsSortChange={setIsSortChange}
                        />
                        {/* Filter Dialog */}
                        <FilterDialog
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            discountRange={discountRange}
                            setDiscountRange={setDiscountRange}
                            ratingValue={ratingValue}
                            setRatingValue={setRatingValue}
                            // isLargeScreen={isLargeScreen}
                            isFilterChange={isFilterChange}
                            setIsFilterChange={setIsFilterChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
