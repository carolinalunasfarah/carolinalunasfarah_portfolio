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

// views
import Contact from "./views/Contact";
import About from "./views/About";
import Works from "./views/Works";

function App() {
    return (
        <>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/about" element={<About />} />

                <Route path="/works" element={<Works />} />
                <Route path="/works/architecture" element={<ArchSlider />} />
                <Route path="/works/fullstack" element={<FsSlider />} />

                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
