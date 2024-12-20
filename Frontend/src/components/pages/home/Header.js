import combineLogoText from "../../../utils/images/logo/combine-logo-text-white.svg";

import user from "../../../utils/images/header/user.svg";
import cart from "../../../utils/images/header/cart.svg";
import ham from "../../../utils/images/header/ham.svg";
import SearchBar from "../../common/SearchBar";
import Button from "../../common/Button";
import { Link } from "react-router-dom";

const Header = ({ setIsSidebarActive, isSidebarActive }) => {
    return (
        <div className="bg-[#74B83E] h-20 flex items-center justify-between gap-4 px-8 w-full">
            {/* Logo */}
            <Link className="flex items-center" to={"/"}>
                <img
                    src={combineLogoText}
                    alt="Combine logo"
                    className="h-16"
                />
            </Link>

            {/* Search Bar */}
            <div className="w-1/3 md:block hidden">
                <SearchBar />
            </div>

            {/* Location */}
            <Button
                color={"#FFFFFF"}
                text={"Location"}
                textColor={"#00000"}
                customClasses="md:block hidden"
            />

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

                {/* Hamburger */}
                <div
                    className="md:hidden block"
                    onClick={() => setIsSidebarActive(!isSidebarActive)}>
                    <img src={ham} alt="ham" className="h-12" />
                </div>
            </div>
        </div>
    );
};

export default Header;
