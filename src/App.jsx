import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// views
import Home from "./views/Home";

// components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FsSlider from "./components/FsSlider";
import ArchSlider from "./components/ArchSlider";
import Hobbies from "./components/Hobbies";

// views
import Contact from "./views/Contact";
import About from "./views/About";
import Works from "./views/Works";
import Links from "./views/Links";

function App() {
    return (
        <>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path="/about" element={<About />} />
                <Route path="/about/hobbies" element={<Hobbies />} />

                <Route path="/works" element={<Works />} />
                <Route path="/works/architecture" element={<ArchSlider />} />
                <Route path="/works/fullstack" element={<FsSlider />} />
                
                <Route path="/links" element={<Links />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
