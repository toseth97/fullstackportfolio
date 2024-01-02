import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" exact element={<Hero />} />
                    <Route path="/portfolio" exact element={<Portfolio />} />
                    <Route path="/contact" exact element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
