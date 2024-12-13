import SliderTemplate from "../../common/SliderTemplate";
import { productData } from "../../../utils/constants/DummyProducts";
import Button from "../../common/Button";
import rightArrow from "../../../utils/images/product/right-arrow.svg";
import ProductCard from "../../common/ProductCard";

const Product = () => {
    // Define responsive settings for carousel
    const responsive = {
        superLargeDesktop1: {
            breakpoint: { max: 4000, min: 3000 },
            items: 8,
            slidesToSlide: 1,
        },
        superLargeDesktop2: {
            breakpoint: { max: 3000, min: 2000 },
            items: 6,
            slidesToSlide: 1,
        },
        superLargeDesktop3: {
            breakpoint: { max: 2000, min: 1700 },
            items: 5,
            slidesToSlide: 1,
        },
        largeDesktop: {
            breakpoint: { max: 1700, min: 1350 },
            items: 4,
            slidesToSlide: 1,
        },
        desktop: {
            breakpoint: { max: 1350, min: 900 },
            items: 3,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 900, min: 600 },
            items: 3,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 2,
            slidesToSlide: 1,
        },
    };

    // Categories for rendering
    const categories = [
        "Todays Deal",
        "Top Offer",
        "Top Rated",
        "Fruits",
        "Vegetables",
        "Snacks",
    ];

    return (
        <div className="w-full bg-[#E4EDEC] flex justify-center pt-24">
            <div className="lg:px-20 md: sm: px-4 w-full">
                {categories.map((category) => (
                    <div key={category} className="mb-32 relative">
                        <p className="text-4xl font-bold text-black mb-2 font-nunito">
                            {category}
                        </p>
                        <SliderTemplate responsive={responsive}>
                            {productData[category]?.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </SliderTemplate>
                        <Button
                            text="Explore More"
                            color={"#F5FBF4"}
                            textColor={"text-[#74B83E]"}
                            fontSize="text-2xl"
                            border={"1px solid"}
                            image={rightArrow}
                            customClasses="absolute right-0 font-poppins"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
