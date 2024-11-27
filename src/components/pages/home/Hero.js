import HeroBg from "../../../utils/images/hero/hero-bg.svg";
import Button from "../../common/Button";
import rightArrow from "../../../utils/images/hero/right-arrow.svg";

const Hero = () => {
    return (
        <div
            className="hero h-[calc(100svh-128px)] bg-no-repeat bg-cover bg-center flex justify-center"
            style={{ backgroundImage: `url(${HeroBg})` }}>
            <div className="w-10/12">
                <div className="w-[40%] flex flex-col justify-center h-full gap-4 ml-10">
                    <p className="font-merriweathers font-bold text-[4.4rem] leading-none">
                        Freshness Delivered to Your Doorstep
                    </p>
                    <p className="font-merriweathers italic text-lg leading-6">
                        Shop the finest selection of farm-fresh fruits,
                        vegetables, and groceries. Handpicked for quality,
                        straight from the farm to your home.
                    </p>
                    <Button color={"#74B83E"} text={"Explore More"} fontSize="text-3xl" image={rightArrow} padding={"px-3 py-2"} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
