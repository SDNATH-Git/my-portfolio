import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import photoUrl from "../assets/shuvo.png";
import resumeDownloadLink from "../assets/Resume.pdf";
import resumePreviewLink from "../assets/Resume.pdf";
import { Typewriter } from 'react-simple-typewriter';

const textContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconHover = {
    scale: 1.2,
    transition: { type: "spring", stiffness: 300 },
};

const buttonHover = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
};

const imageAnimation = {
    animate: {
        y: [0, -10, 0], // হালকা আপ-ডাউন floating effect
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
    hover: {
        scale: 1.05,
        borderColor: "#FBBF24", // Tailwind's yellow-400 color hex
        transition: { duration: 0.3, ease: "easeInOut" },
    },
};



const Designation = () => {
    return (
        <section className="text-white flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-5 md:px-5 lg:px-10 py-30 gap-10 lg:gap-20">

            {/* Left Side - Content */}
            <motion.div
                className="flex-1"
                variants={textContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.p variants={textVariant} className="text-2xl font-bold mb-2">
                    Hello I'm
                </motion.p>

                <motion.h1
                    variants={textVariant}
                    className="text-4xl md:text-5xl font-extrabold mb-2 text-orange-500"
                >
                    SD NATH
                </motion.h1>

                <motion.h2
                    variants={textVariant}
                    className="text-xl md:text-2xl font-semibold mb-6 text-gray-300"
                >
                    MERN Stack


                    <span className="text-gray-200 text-xl md:text-2xl font-semibold ml-2">
                        <Typewriter
                            words={['Developer']}
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
                    className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base"
                >
                    I specialize in building full-stack web applications using MongoDB,
                    Express.js, React, and Node.js. Focused on creating efficient,
                    scalable solutions with clean code architecture.
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    variants={textVariant}
                    className="flex space-x-6 mb-8 text-white text-2xl"
                >
                    {[{
                        href: "https://github.com/SDNATH-Git",
                        icon: <FaGithub />,
                        colorHover: "text-orange-500"
                    }, {
                        href: "https://www.linkedin.com/in/sd-nath/",
                        icon: <FaLinkedin />,
                        colorHover: "text-blue-600"
                    }, {
                        href: "https://www.facebook.com/sd.nath.9400/",
                        icon: <FaFacebook />,
                        colorHover: "text-blue-700"
                    }].map(({ href, icon, colorHover }, i) => (
                        <motion.a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors duration-300 hover:${colorHover}`}
                            whileHover={iconHover}
                            aria-label="social-link"
                        >
                            {icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Buttons */}
                <motion.div variants={textVariant} className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                    <motion.a
                        href={resumeDownloadLink}
                        download
                        className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors duration-300"
                        whileHover={buttonHover}
                    >
                        Download Resume <span>📥</span>
                    </motion.a>
                    <motion.a
                        href={resumePreviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-gray-600 hover:border-orange-500 text-white px-5 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors duration-300"
                        whileHover={buttonHover}
                    >
                        Preview Resume <span>👁️</span>
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Right Side - Photo */}
            <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: 5, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.7)" }}
            >
                <img
                    src={photoUrl}
                    alt="SD NATH"
                    className="w-64 h-64 md:w-[550px] md:h-[550px] lg:w-96 lg:h-96 rounded-full border-3 border-orange-500 object-cover shadow-2xl shadow-orange-600 transition-transform duration-300"
                />
            </motion.div>

        </section>
    );
};

export default Designation;
