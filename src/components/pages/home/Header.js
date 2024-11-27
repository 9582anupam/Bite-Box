import combineLogoText from "../../../utils/images/logo/combine-logo-text-white.svg";

import user from "../../../utils/images/header/user.svg";
import cart from "../../../utils/images/header/cart.svg";
import SearchBar from "../../common/SearchBar";
import Button from "../../common/Button";

const Header = () => {
    return (
        <div className="bg-[#74B83E] h-20 flex items-center justify-evenly gap-4 px-4 w-full ">
            {/* Logo */}
            <div className="flex items-center">
                <img src={combineLogoText} alt="Combine logo" className="h-16" />
            </div>

            {/* Search Bar */}
            <div className="w-1/3">
                <SearchBar />
            </div>

            {/* Location */}
            <Button color={"#FFFFFF"} text={"Location"} textColor={"#00000"} />

            {/* User/Cart */}
            <div className="flex gap-4">
                {/* Cart */}
                <div>
                    <img src={cart} alt="Cart" className="h-12" />
                </div>
                {/* User */}
                <div>
                    <img src={user} alt="User" className="h-12" />
                </div>
            </div>
        </div>
    );
};

export default Header;
