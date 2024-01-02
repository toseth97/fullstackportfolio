import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Hero />} />
                    <Route path="/portfolio" exact element={<Portfolio />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
