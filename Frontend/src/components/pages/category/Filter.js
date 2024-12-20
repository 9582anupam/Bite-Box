import React from "react";
import { Slider } from "@mui/material";
import { Box } from "@mui/system";
import Rating from "@mui/material/Rating";
import Button from "../../common/Button";

const Filter = ({
    priceRange,
    setPriceRange,
    discountRange,
    setDiscountRange,
    ratingValue,
    setRatingValue,
    isLargeScreen,
}) => {
    const handlePriceRangeChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const handleDiscountRangeChange = (event, newValue) => {
        setDiscountRange(newValue);
    };

    const handleRatingChange = (event, newValue) => {
        setRatingValue(newValue);
    };

    return (
        <div className="lg:w-1/4 w-[30%] mt-4 flex-1 bg-white fixed p-2 py-6 px-4 lg:px-10 rounded-lg shadow-lg h-fit flex flex-col gap-6">
            <div className="flex justify-between w-full">
                <p className="text-3xl font-semibold text-gray-800 mb-4">
                    Filter
                </p>

                {/* Apply Button */}
                <Button
                    text={"Apply"}
                    color={"#74B83E"}
                    textColor={"text-[white]"}
                    fontSize={"text-lg"}
                    padding={"px-4 py-2"}
                    borderRadius={"rounded-md"}
                    customClasses={"hover:bg-opacity-80 h-fit"}
                />
            </div>

            {/* Price Range */}
            <div className="">
                <p className="text-lg font-medium text-gray-700">Price Range</p>
                <Box sx={{}}>
                    <Slider
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => `$${value}`}
                        min={0}
                        max={5000}
                        disableSwap
                        sx={{
                            "& .MuiSlider-rail": {
                                backgroundColor: "#e0e0e0",
                            },
                            "& .MuiSlider-track": {
                                backgroundColor: "#4CAF50",
                                borderColor: "#4CAF50",
                            },
                            "& .MuiSlider-thumb": {
                                backgroundColor: "#4CAF50",
                            },
                        }}
                    />
                    {/* Display Price Range Values */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                        <span className="font-medium">${priceRange[0]}</span>
                        <span className="font-medium">${priceRange[1]}</span>
                    </Box>
                </Box>
            </div>

            {/* Discount Range */}
            <div>
                <p className="text-lg font-medium text-gray-700">
                    Discount Range
                </p>
                <Box sx={{}}>
                    <Slider
                        value={discountRange}
                        onChange={handleDiscountRangeChange}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => `${value}%`}
                        min={0}
                        max={100}
                        disableSwap
                        sx={{
                            "& .MuiSlider-rail": {
                                backgroundColor: "#e0e0e0",
                            },
                            "& .MuiSlider-track": {
                                backgroundColor: "#FF9800",
                                borderColor: "#FF9800",
                            },
                            "& .MuiSlider-thumb": {
                                backgroundColor: "#FF9800",
                            },
                        }}
                    />
                    {/* Display Discount Range Values */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                        <span className="font-medium">{discountRange[0]}%</span>
                        <span className="font-medium">{discountRange[1]}%</span>
                    </Box>
                </Box>
            </div>

            {/* Rating */}
            <div>
                <p className="text-lg font-medium text-gray-700">Rating</p>
                <Rating
                    name="product-rating"
                    value={ratingValue}
                    onChange={handleRatingChange}
                    precision={0.5}
                    size={isLargeScreen ? "large" : "medium"}
                    sx={{
                        "& .MuiRating-icon": {
                            color: "#FFD700", // Gold color for stars
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default Filter;