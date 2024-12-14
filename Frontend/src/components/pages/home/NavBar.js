import "./home.css";
import { Link } from 'react-scroll';

const NavBar = () => {
    const navList = ["Vegetables", "Fruits", "Snacks", "Offers", "Top Rated", "Todays Deal"];

    return (
        <div className="navbar bg-[#429A2D] h-12 w-full md:flex items-center justify-evenly hidden">
            {navList.map((nav, index) => (
                <Link
                    key={index} // `key` should be on the Link component
                    to={`category-${nav}`} // Using the correct prop `to` with the section ID
                    smooth={true}           // Enables smooth scrolling
                    duration={500}          // Duration of scroll (in milliseconds)
                    className="text-white hover:text-gray text-2xl nav-item cursor-pointer"
                >
                    <div className="transition-all duration-100">{nav}</div>
                    <div className="under-highlight w-full h-[1px] bg-white opacity-0 transition-all"></div>
                </Link>
            ))}
        </div>
    );
};

export default NavBar;
