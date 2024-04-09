import { BrowserRouter } from "react-router-dom";
import { About, Experiences, Hero, Navbar } from "./components";

function App() {
    return (
        <BrowserRouter>
            <div className="relative z-0">
                <div>
                    <Navbar />
                    <Hero />
                </div>

                <About />
                <Experiences />
            </div>
        </BrowserRouter>
    );
}

export default App;
