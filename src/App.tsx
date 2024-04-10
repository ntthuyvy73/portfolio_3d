import { BrowserRouter } from "react-router-dom";
import {
    About,
    Contact,
    Experiences,
    Hero,
    Navbar,
    Projects,
    Tech,
} from "./components";
import { LinkContext } from "./utils";
import { useState } from "react";

function App() {
    const [activeLink, setActiveLink] = useState("");

    return (
        <LinkContext.Provider value={{ activeLink, setActiveLink }}>
            <BrowserRouter>
                <div className="relative z-0">
                    <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">
                        <Navbar />
                        <Hero />
                    </div>

                    <About />
                    <Experiences />
                    <Tech />
                    <Projects />

                    <Contact />
                </div>
            </BrowserRouter>
        </LinkContext.Provider>
    );
}

export default App;
