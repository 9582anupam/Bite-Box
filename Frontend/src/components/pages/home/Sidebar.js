const Sidebar = () => {
    const navList = ["Fruits", "Vegetables", "Snacks", "Offers"];

    return (
        <div className="sidebar bg-[#74b83e] h-full p-4">
            <p className="text-4xl font-bold text-center mb-4 text-[#f9f7f2]">
                Categories
            </p>
            <div className="h-[1px] w-full bg-white mb-8 opacity-50"></div>
            <div className="flex flex-col gap-6">
                {navList.map((nav, index) => (
                    <p
                        key={index}
                        className="text-3xl text-white cursor-pointer">
                        {nav}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
