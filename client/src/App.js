import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import SinglePagePortfolio from "./components/SinglePagePortfolio";
import Blog from "./components/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" exact element={<Hero />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/portfolio/:id"
                        exact
                        element={<SinglePagePortfolio />}
                    />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
