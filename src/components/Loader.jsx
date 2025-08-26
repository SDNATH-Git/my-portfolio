// import React from "react";
// import { motion } from "framer-motion";
// import loaderPng from "../assets/logo.png";

// const Loader = () => {
//     return (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center z-50 ">

//             <motion.img
//                 src={loaderPng}
//                 alt="Loading..."
//                 className="w-30 h-30 mb-4 p-4 rounded-full border-4 border-orange-500"
//                 animate={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
//             />

//             <p className="text-orange-500 text-xl font-semibold">Loading...</p>
//         </div>
//     );
// };

// export default Loader;


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