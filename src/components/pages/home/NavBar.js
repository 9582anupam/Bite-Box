import { Link } from "react-router-dom";

const NavBar = () => {
    const navList = [
        "Fruits",
        "Vegetables",
        "Snacks",
        "Offers",
        "nav5",
        "nav6",
        "nav7",
        "nav8",
    ];

    return (
        <div className="bg-[#429A2D] h-12 w-full flex items-center justify-evenly">
            {navList.map((nav, index) => (
                <Link
                    key={index} // `key` should be on the Link component
                    to={`/category/${nav.toLowerCase()}`} // Dynamic routing, for example: `/fruits`, `/vegetables`, etc.
                    className="text-white hover:text-gray-100 text-2xl">
                    <div className="transition-all duration-100">{nav}</div>
                </Link>
            ))}
        </div>
    );
};

export default NavBar;
