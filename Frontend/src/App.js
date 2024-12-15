import Home from "./components/pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/pages/home/Header";
import NavBar from "./components/pages/home/NavBar";
import { useState } from "react";

function App() {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    return (
        <div className="App">
            <Header
                isSidebarActive={isSidebarActive}
                setIsSidebarActive={setIsSidebarActive}
            />
            <NavBar />
            <BrowserRouter>
                <div className="content-wrapper">
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
