import React, { useState, useEffect } from "react";
import {
    FaHome,
    FaUser,
    FaTools,
    FaGraduationCap,
    FaProjectDiagram,
    FaEnvelope,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navBg, setNavBg] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const handleScroll = () => {
        if (window.scrollY > 50) setNavBg(true);
        else setNavBg(false);
    };

    const handleSectionChange = () => {
        const sections = ["home", "about", "skills", "education", "project", "contacts"];
        const scrollPos = window.scrollY + 200;

        for (let section of sections) {
            const el = document.getElementById(section);
            if (el) {
                const top = el.offsetTop;
                const bottom = top + el.offsetHeight;
                if (scrollPos >= top && scrollPos < bottom) {
                    setActiveSection(section);
                    console.log("Active Section:", section);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleSectionChange);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", handleSectionChange);
        };
    }, []);

    const navItems = [
        { name: "Home", icon: <FaHome />, link: "home" },
        { name: "About", icon: <FaUser />, link: "about" },
        { name: "Skills", icon: <FaTools />, link: "skills" },
        { name: "Education", icon: <FaGraduationCap />, link: "education" },
        { name: "Project", icon: <FaProjectDiagram />, link: "project" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${navBg ? "bg-gray-900 shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <a href="#home" className="flex-shrink-0">
                    <img className="w-10 h-10 cursor-pointer" src={logo} alt="Logo" />
                </a>

                {/* Center menu */}
                <ul className="hidden lg:flex space-x-8 text-white font-medium">
                    {navItems.map((item) => (
                        <li key={item.link}>
                            <Link
                                to={item.link}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className={`cursor-pointer flex items-center gap-2 px-3 py-1 rounded-md transition-colors
                ${activeSection === item.link
                                        ? "bg-orange-300 text-gray-900"
                                        : "hover:bg-orange-400 hover:text-white"
                                    }
                `}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right contacts button */}
                <div className="hidden lg:block">
                    <Link
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className={`cursor-pointer px-4 py-2 rounded-md font-semibold transition-colors
              ${activeSection === "contacts"
                                ? "bg-orange-300 text-gray-900"
                                : "bg-orange-500 text-white hover:bg-orange-600"
                            }
            `}
                        onClick={() => setIsOpen(false)}
                    >
                        <FaEnvelope className="inline mr-2" />
                        Contacts
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <div className="lg:hidden flex items-center gap-3 text-white">
                    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <ul className="lg:hidden bg-gray-900 text-white space-y-4 py-6 px-4">
                    {navItems.map((item) => (
                        <li key={item.link}>
                            <Link
                                to={item.link}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md transition-colors
                ${activeSection === item.link
                                        ? "bg-orange-300 text-gray-900"
                                        : "hover:bg-orange-400 hover:text-white"
                                    }
                `}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md transition-colors ${activeSection === "contacts"
                                ? "bg-orange-300 text-gray-900"
                                : "bg-orange-500 text-white hover:bg-orange-600"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <FaEnvelope />
                            <span>Contacts</span>
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;









