import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// views
import Home from "./views/Home";

// components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contact from "./views/Contact";
import About from "./views/About";
import Hobbies from "./views/Hobbies";
import Works from "./views/Works";

function App() {
    return (
        <>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />
                <Route path="/hobbies" element={<Hobbies />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
