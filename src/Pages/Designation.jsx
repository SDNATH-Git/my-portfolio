
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import photoUrl from "../assets/shuvo.png";
import resumeDownloadLink from "../assets/Shuvo_Dev_Nath_Resume.pdf";
import resumePreviewLink from "../assets/Shuvo_Dev_Nath_Resume.pdf";
import { Typewriter } from "react-simple-typewriter";

import { FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import {
    SiTypescript,
    SiMongodb,
    SiExpress,
    SiNextdotjs,
    SiMysql,
} from "react-icons/si";

/* ---------------- Animations ---------------- */
const textContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const iconHover = {
    scale: 1.3,
    transition: { type: "spring", stiffness: 300 },
};

const buttonHover = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
};

/* ---------------- Component ---------------- */
const Designation = () => {
    return (
        <section className="text-white flex flex-col-reverse lg:flex-row items-center justify-between px-5 md:px-5 lg:px-10 py-28 gap-16 ">

            {/* ========== LEFT CONTENT ========== */}
            <motion.div
                className="flex-1"
                variants={textContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.p variants={textVariant} className="text-xl font-semibold mb-2">
                    Hello, I'm
                </motion.p>

                <motion.h1
                    variants={textVariant}
                    className="text-2xl md:text-4xl font-extrabold mb-3 text-orange-500"
                >
                    Shuvo Dev Nath
                </motion.h1>

                <motion.h2
                    variants={textVariant}
                    className="text-xl md:text-2xl font-semibold mb-6 text-gray-300"
                >
                    MERN Stack{" "}
                    <span className="text-white ml-2">
                        <Typewriter
                            words={["Developer"]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>
                </motion.h2>

                <motion.p
                    variants={textVariant}
                    className="text-gray-400 mb-8 leading-relaxed max-w-xl"
                >
                    I build scalable, secure, and high-performance full-stack web
                    applications using Typescript,React, Node.js, Express, and MongoDB. I focus on
                    clean architecture, smooth UX, and maintainable code.
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    variants={textVariant}
                    className="flex gap-6 mb-10 text-2xl"
                >
                    {[
                        {
                            href: "https://github.com/SDNATH-Git",
                            icon: <FaGithub />,
                            color: "hover:text-orange-500",
                        },
                        {
                            href: "https://www.linkedin.com/in/sd-nath/",
                            icon: <FaLinkedin />,
                            color: "hover:text-blue-500",
                        },
                        {
                            href: "https://www.facebook.com/sd.nath.9400/",
                            icon: <FaFacebook />,
                            color: "hover:text-blue-600",
                        },
                    ].map(({ href, icon, color }, i) => (
                        <motion.a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors ${color}`}
                            whileHover={iconHover}
                        >
                            {icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                    variants={textVariant}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <motion.a
                        href={resumeDownloadLink}
                        download
                        whileHover={buttonHover}
                        className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-medium text-center"
                    >
                        Download Resume 📥
                    </motion.a>

                    <motion.a
                        href={resumePreviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={buttonHover}
                        className="border border-gray-500 hover:border-orange-500 px-6 py-3 rounded-lg font-medium text-center"
                    >
                        Preview Resume 👁️
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* ========== RIGHT IMAGE + ORBIT ========== */}
            <motion.div
                className="relative flex justify-center items-center lg:mr-10 md:mr-0"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Orbit Ring */}
                <motion.div
                    className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >


                    {/* Icons */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 text-yellow-400 text-2xl"><FaJsSquare /></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 text-cyan-400 text-2xl"><FaReact /></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-blue-500 text-2xl"><SiTypescript /></div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 text-green-500 text-2xl"><FaNodeJs /></div>

                    <div className="absolute top-[12%] right-[18%] text-white text-xl"><SiNextdotjs /></div>
                    <div className="absolute bottom-[12%] right-[18%] text-blue-400 text-xl"><SiMysql /></div>
                    <div className="absolute top-[12%] left-[18%] text-gray-300 text-xl"><SiExpress /></div>
                    <div className="absolute bottom-[12%] left-[18%] text-green-400 text-xl"><SiMongodb /></div>
                </motion.div>

                {/* Profile Image */}
                <motion.img
                    src={photoUrl}
                    alt="SD NATH"
                    className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96
                     rounded-full border-4 border-orange-500 object-cover
                     shadow-2xl shadow-orange-500 z-10"
                    whileHover={{ scale: 1.05 }}
                />
            </motion.div>
        </section >
    );
};

export default Designation;
