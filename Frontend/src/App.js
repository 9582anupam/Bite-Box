import Home from "./components/pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import NavBar from "./components/common/navbar/NavBar";
// import Location from "./components/pages/home/Location";
import { useState, useEffect, useRef } from "react";
import Sidebar from "./components/common/sidebar/Sidebar";
import Category from "./components/pages/category/Category";
import SearchBar from "./components/common/SearchBar";
import Footer from "./components/common/footer/Footer";
import "./components/common/sidebar/sidebar.css";
import Product from "./components/pages/product/Product";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const sidebarRef = useRef(null); // Create a ref for the sidebar
    const headerRef = useRef(null); // Create a ref for the header

    // Close the sidebar if clicked outside the sidebar (and not at the ham button)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                !headerRef.current.contains(event.target)
            ) {
                setIsSidebarActive(false); // Close sidebar if clicked outside
            }
        };

        // Attach the event listener
        document.addEventListener("click", handleClickOutside);

        // Cleanup the event listener when the component is unmounted
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="App">
                <div className="fixed z-40 w-full">
                    <div
                        className={`${isSidebarActive ? "active" : ""
                            } sidebar-parent z-50`}
                        ref={sidebarRef}>
                        <Sidebar />
                    </div>
                    <Header
                        isSidebarActive={isSidebarActive}
                        setIsSidebarActive={setIsSidebarActive}
                        headerRef={headerRef}
                    />
                    <NavBar />
                    <div className="min-h-12 md:hidden block">
                        <SearchBar size={"medium"} />
                    </div>
                    {/* <Location /> */}
                </div>
                <div className="content-wrapper pt-32">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:id" element={<Category />} />
                        <Route path="/product/:id" element={<Product />} />
                    </Routes>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
