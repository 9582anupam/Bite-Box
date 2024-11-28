import { Link } from "react-router-dom";
import plusImage from "../../utils/images/slider/plus.svg";

const ProductCard = ({ product }) => {
    return (
        <div
            key={product.id}
            className="w-[160px] sm:w-[190px] md:w-[210px] lg:w-[270px] py-2 px-2 my-2 flex flex-col rounded-xl bg-[white] transition-transform duration-300 hover:scale-[1.01] mx-auto">
            <Link to={`/product/${product.id}`} className="gap-2 flex flex-col">
                <img
                    alt={`${product.title} logo`}
                    src={product.imageUrl}
                    className="object-contain rounded-md bg-white mx-auto"
                />
                <div className="flex flex-col gap-2 bg-[#F8F8F8] font-poppins py-1">
                    <p className="font-semibold text-lg text-black text-center overflow-hidden whitespace-nowrap text-ellipsis">
                        {product.title}
                    </p>
                    <div className="flex justify-center items-center gap-2">
                        <p className="text-lg line-through text-[#7F7F7F] leading-3">
                            {product.oldPrice}
                        </p>
                        <p className="text-2xl text-[#74B83E] leading-3 font-semibold">
                            {product.newPrice}
                        </p>
                    </div>
                    <div className="bg-[#74B83E] flex justify-center items-center gap-1 px-5 py-2 rounded-lg text-white text-center mt-2 w-fit mx-auto">
                        <p className="text-xl leading-3">Add</p>
                        <img
                            src={plusImage}
                            alt="plus"
                            className="inline-block h-4 w-4"
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
