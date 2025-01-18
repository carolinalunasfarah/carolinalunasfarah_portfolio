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
import Works from "./views/Works";
import NotFound from "./views/NotFound"

function App() {
    return (
        <>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/works" element={<Works />} />
                <Route path="/works/architecture" element={<ArchSlider />} />
                <Route path="/works/fullstack" element={<FsSlider />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
