import Hero from "./Hero";
import Product from "./Product";
import Footer from "./Footer";

import "./home.css";

const Home = () => {
    return (
        <div className="home overflow-x-hidden  relative">
            <div className="w-full">
                <Hero />
                <Product />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
