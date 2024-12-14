import { Link } from 'react-scroll';

const Sidebar = () => {
    const navList = ["Fruits", "Vegetables", "Snacks", "Offers", "Top Rated", "Todays Deal"];

    return (
        <div className="sidebar bg-[#74b83e] h-full p-4">
            <p className="text-4xl font-bold text-center mb-4 text-[#f9f7f2]">
                Categories
            </p>
            <div className="h-[1px] w-full bg-white mb-8 opacity-50"></div>
            <div className="flex flex-col gap-6">
                {navList.map((nav, index) => (
                    <Link
                        key={index}
                        to={`category-${nav}`} // Using the correct prop `to` with the section ID
                        smooth={true}           // Enables smooth scrolling
                        duration={500}        
                        className="text-3xl text-white cursor-pointer">
                        {nav}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
