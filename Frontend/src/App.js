import Home from "./components/pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/pages/home/Header";
import NavBar from "./components/pages/home/NavBar";
import Location from "./components/pages/home/Location";
import { useState } from "react";
import Sidebar from "./components/pages/home/Sidebar";

function App() {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    return (
        <div className="App">
            <div className="fixed z-10 w-full">
                <div
                    className={`${isSidebarActive ? "active" : ""} sidebar-parent`}>
                    <Sidebar />
                </div>
                <Header
                    isSidebarActive={isSidebarActive}
                    setIsSidebarActive={setIsSidebarActive}
                />
                <NavBar />
                <Location />
            </div>
            <BrowserRouter>
                <div className="content-wrapper pt-32">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    isSidebarActive={isSidebarActive}
                                    setIsSidebarActive={setIsSidebarActive}
                                />
                            }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
