import { Route, Routes } from "react-router-dom";

import "./App.css";

// views
import Home from "./views/Home";

// components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contact from "./views/Contact";

function App() {
    return (
        <>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
