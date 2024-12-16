import Hero from "./Hero";
import Product from "./Product";
import Footer from "./Footer";

import "./home.css";

const Home = ({ isSidebarActive, setIsSidebarActive }) => {
    return (
        <div className="home overflow-x-hidden  relative">
            <div
                className="w-full"
                onClick={() => isSidebarActive && setIsSidebarActive(false)}>
                <Hero />
                <Product />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
