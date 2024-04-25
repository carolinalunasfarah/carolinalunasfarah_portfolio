import { Route, Routes } from "react-router-dom";

import "./App.css";

// views
import Home from "./views/Home";

// components
import Navigation from "./components/Navigation";

function App() {
    return (
        <>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
