import React from "react";
import { motion } from "framer-motion";
import loaderPng from "../assets/logo.png";

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center z-50 ">

            <motion.img
                src={loaderPng}
                alt="Loading..."
                className="w-30 h-30 mb-4 p-4 rounded-full border-4 border-orange-500"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />

            <p className="text-orange-500 text-xl font-semibold">Loading...</p>
        </div>
    );
};

export default Loader;
