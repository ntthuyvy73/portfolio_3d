import { Link } from "react-router-dom";

import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("");

    return (
        <nav className=" padding-x w-full flex  items-center fixed top-0 z-20 bg-primary py-5">
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center">
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
                            className={`font-medium text-[18px] hover:text-white  ${
                                active === item.id
                                    ? "text-white"
                                    : "text-secondary"
                            }`}
                            onClick={() => setActive(item.id)}
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
                                        className={`font-medium text-[18px] hover:text-white  ${
                                            active === item.id
                                                ? "text-white"
                                                : "text-secondary"
                                        }`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(item.id);
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
