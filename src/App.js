import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
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
        </div>
    );
}

export default App;
