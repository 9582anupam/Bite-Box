import Home from "./components/pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/pages/home/Header";
import NavBar from "./components/pages/home/NavBar";
import Location from "./components/pages/home/Location";
import { useState } from "react";
import Sidebar from "./components/pages/home/Sidebar";
import Category from "./components/pages/category/Category";

function App() {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    return (
        <BrowserRouter>
            <div className="App">
                <div className="fixed z-50 w-full">
                    <div
                        className={`${
                            isSidebarActive ? "active" : ""
                        } sidebar-parent`}>
                        <Sidebar />
                    </div>
                    <Header
                        isSidebarActive={isSidebarActive}
                        setIsSidebarActive={setIsSidebarActive}
                    />
                    <NavBar />
                    <Location />
                </div>
                <div
                    className="content-wrapper pt-32"
                    onClick={() =>
                        isSidebarActive && setIsSidebarActive(false)
                    }>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:id" element={<Category />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
