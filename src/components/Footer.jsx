import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-16">
            <div className="px-6   text-center">

                {/* Logo */}
                <div className="flex justify-center py-3">
                    <a href="#home" className="flex-shrink-0 ">
                        <img className="w-10 h-10 cursor-pointer" src={logo} alt="Logo" />
                    </a>

                </div>

                <div className="flex  justify-center space-x-6 text-2xl">
                    <a
                        href="https://github.com/SDNATH-Git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sd-nath/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.facebook.com/sd.nath.9400/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition"
                        aria-label="Facebook"
                    >
                        <FaFacebook />
                    </a>
                </div>
                <h1 className="py-2">MERN Stack Developer</h1>
                <hr />
                <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} sd nath. All rights reserved.</p>


            </div>
        </footer>
    );
};

export default Footer;
