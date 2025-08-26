import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 bg-opacity-90">
            <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Static Border */}
                <div className="absolute inset-0 rounded-full border-8 border-orange-700"></div>

                {/* Rotating Border */}
                <motion.div
                    className="absolute inset-0 rounded-full border-8 border-transparent"
                    style={{
                        borderTopColor: "black",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Logo */}
                <div className="w-40 h-40  rounded-full flex items-center justify-center shadow-lg">
                    <img src={Logo} alt="Logo" className="w-40 h-40 object-contain p-8" />
                </div>
            </div>
        </div>
    );
};

export default Loader;