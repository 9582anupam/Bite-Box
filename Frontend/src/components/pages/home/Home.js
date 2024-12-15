import Hero from "./Hero";
import Product from "./Product";
import Footer from "./Footer";
import Location from "./Location";
import Sidebar from "./Sidebar";

import "./home.css";

const Home = ( { isSidebarActive, setIsSidebarActive } ) => {

    return (
        <div className="home overflow-x-hidden  relative">
            <div
                className={`${isSidebarActive ? "active" : ""} sidebar-parent`}>
                <Sidebar />
            </div>
            <div
                className="w-full"
                onClick={() => isSidebarActive && setIsSidebarActive(false)}>
                <Location />
                <Hero />
                <Product />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
