import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Hero />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
