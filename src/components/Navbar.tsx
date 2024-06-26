import { Link } from "react-router-dom";

import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { useContext, useEffect, useState } from "react";
import { LinkContext } from "../utils";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const context = useContext(LinkContext);

    const [activeSection, setActiveSection] = useState(null);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop < 100) setScrolled(true);
        else setScrolled(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //definition all sections on page
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    //Update state with the visible section ID
                    setActiveSection(entry.target.id);
                }
            });
        });
        const sections = document.querySelectorAll("[data-section]"); //get all section with setup data-section => to get id

        sections.forEach((section) => {
            observer.observe(section);
        });

        //Cleanup function to remove observer
        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    //scroll to section and active link
    useEffect(() => {
        console.log(activeSection);
        if (activeSection) context?.setActiveLink(activeSection);
        else context?.setActiveLink("");
    }, [activeSection]);

    return (
        <nav
            className={` padding-x w-full flex  items-center fixed top-0 z-20  py-5 ${
                scrolled ? "bg-transparent" : "bg-primary"
            }`}
        >
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
                <Link
                    to="/"
                    className="flex items-center"
                    onClick={() => {
                        context?.setActiveLink("");
                        window.scroll(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        alt=""
                        className="object-contain w-10 h-10"
                    />
                    <p>
                        Thúy Vy
                        <span className="text-purple">
                            | Fullstack Developer
                        </span>
                    </p>
                </Link>

                {/* menu */}
                <ul className="hidden sm:flex flex-row  gap-10 ">
                    {navLinks.map((item, index) => (
                        <li
                            key={`li-${index}`}
                            className={`font-medium text-[18px] hover:text-purple  ${
                                context?.activeLink === item.id
                                    ? "text-purple"
                                    : "text-secondary"
                            }`}
                            onClick={() => context?.setActiveLink(item.id)}
                        >
                            <a href={`#${item.id}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>

                {/* toggle */}
                <div className="sm:hidden flex-1 flex justify-end items-center text-white">
                    <img
                        src={toggle ? close : menu}
                        alt=""
                        className="object-contain w-5 h-5 cursor-pointer"
                        onClick={() => {
                            setToggle(!toggle);
                        }}
                    />

                    {toggle && (
                        <div className="black-gradient absolute right-0 top-14 w-[50%] rounded-2xl p-6 mx-4 z-10">
                            <ul className="flex flex-col justify-end items-start gap-5 ">
                                {navLinks.map((item, index) => (
                                    <li
                                        key={`li-${index}`}
                                        className={`font-medium text-[18px] hover:text-purple  ${
                                            context?.activeLink === item.id
                                                ? "text-purple"
                                                : "text-secondary"
                                        }`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            context?.setActiveLink(item.id);
                                        }}
                                    >
                                        <a href={`#${item.id}`}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
