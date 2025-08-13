import React from "react";
import { FaBook, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import pciu from "../assets/PCIU.png";
import hsc from "../assets/hsc.png";

const educationData = [
    {
        degree: "Bachelor of Science in Computer Science and Engineering (CSE) — Ongoing",
        institute: "Port City International University",
        year: "2023 - Present",
        details:
            "Currently pursuing BSc in CSE, focusing on software engineering, MERN stack development, data structures, algorithms, and database management. Actively engaged in projects involving React, Node.js, MongoDB, and Firebase.",
        logo: pciu,
        logoPosition: "right",
    },
    {
        degree: "Higher Secondary Certificate (HSC) — Science Group",
        institute: "Dewan Hat City Corporation College",
        year: "2021 - 2023",
        details:
            "Completed HSC with specialization in science, excelling in mathematics and physics, which laid the foundation for computer programming and problem-solving skills.",
        logo: hsc,
        logoPosition: "left",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            type: "spring",
            stiffness: 100,
        },
    }),
};

const Education = () => {
    return (
        <section id="education" className="px-5 lg:px-10">
            <h2 className="text-xl md:text-4xl font-extrabold text-center mb-12 text-orange-500 flex items-center justify-center gap-1">
                <FaBook className="text-5xl animate-pulse" />
                Educational Qualification
            </h2>

            <div className="space-y-10">
                {educationData.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        custom={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                        className={`bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row items-center gap-6 p-8 border-l-6 border-orange-500 border border-orange-500 ${edu.logoPosition === "right"
                            ? "md:flex-row"
                            : "md:flex-row-reverse"
                            }`}
                    >
                        {/* Logo */}
                        <div className="flex-shrink-0 rounded-full overflow-hidden w-32 h-32 lg:w-44 lg:h-44 border-2 border-orange-500 shadow-2xl">
                            <img
                                src={edu.logo}
                                alt={`${edu.institute} Logo`}
                                className="w-full h-full object-contain bg-base-200 p-4"
                            />
                        </div>

                        {/* Text */}
                        <div className="flex-1  ">
                            <h3 className="text-xl md:text-3xl font-semibold text-white mb-2">
                                {edu.degree}
                            </h3>
                            <p className="text-gray-300 flex flex-col md:flex-row  gap-3 text-sm md:text-base mb-3">
                                <span className="flex items-center gap-2">
                                    <FaBook className="text-orange-500" />{" "}
                                    {edu.institute}
                                </span>
                                <span className="flex items-center gap-2 md:ml-4">
                                    <FaCalendarAlt className="text-orange-500" />{" "}
                                    {edu.year}
                                </span>
                            </p>
                            <p className="text-gray-400">{edu.details}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;

