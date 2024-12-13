import { Link } from "react-router-dom";
import "./home.css";

const NavBar = () => {
    const navList = ["Fruits", "Vegetables", "Snacks", "Offers", "Top Rated"];

    return (
        <div className="navbar bg-[#429A2D] h-12 w-full md:flex items-center justify-evenly hidden">
            {navList.map((nav, index) => (
                <Link
                    key={index} // `key` should be on the Link component
                    to={`/category/${nav.toLowerCase()}`} // Dynamic routing, for example: `/fruits`, `/vegetables`, etc.
                    className="text-white hover:text-gray text-2xl nav-item">
                    <div className="transition-all duration-100">{nav}</div>
                    <div className="under-highlight w-full h-[1px] bg-white opacity-0 transition-all"></div>
                </Link>
            ))}
        </div>
    );
};

export default NavBar;
