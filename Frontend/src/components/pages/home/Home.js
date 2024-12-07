import Header from "./Header";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Product from "./Product";
import Footer from "./Footer";
import Location from "./Location";
import Sidebar from "./Sidebar";

import { useState } from "react";
import "./home.css";

const Home = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    return (
        <div className="home overflow-x-hidden  relative">
            <div
                className={`${isSidebarActive ? "active" : ""} sidebar-parent`}>
                <Sidebar />
            </div>
            <div
                className="w-full"
                onClick={() => isSidebarActive && setIsSidebarActive(false)}>
                <Header
                    setIsSidebarActive={setIsSidebarActive}
                    isSidebarActive={isSidebarActive}
                />
                <NavBar />
                <Location />
                <Hero />
                <Product />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
