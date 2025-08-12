// src/components/Projects.js
import React from "react";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { FaDiagramProject } from "react-icons/fa6";
import { motion } from "framer-motion";

// ✅ BloodCare Project Images
import p1_1 from "../assets/project1-1.png";
import p1_2 from "../assets/project1-2.png";
import p1_3 from "../assets/project1-3.png";
import p1_4 from "../assets/project1-4.png";
import p1_5 from "../assets/project1-5.png";

// ✅ Food Sharing Project Images
import p2_1 from "../assets/project2-1.png";
import p2_2 from "../assets/project2-2.png";
import p2_3 from "../assets/project2-3.png";
import p2_4 from "../assets/project2-4.png";
import p2_5 from "../assets/project2-5.png";

// ✅ Medical Appointment Project Images
import p3_1 from "../assets/project3-1.png";
import p3_2 from "../assets/project3-2.png";
import p3_3 from "../assets/project3-3.png";
import p3_4 from "../assets/project3-4.png";
import p3_5 from "../assets/project3-5.png";

const projects = [
    {
        id: "easyhome",
        name: "🩸 BloodCare - Blood Donation Platform",
        images: [p1_1, p1_2, p1_3, p1_4, p1_5],
        description:
            "BloodCare is a comprehensive blood donation platform that connects donors with recipients efficiently. It offers role-based access control, location-based donor search, and secure donation request management, delivering a seamless and responsive user experience.",
        tech: ["React", "Firebase Auth", "MongoDB", "Express.js", "+7"],
        liveLink: "https://blood-donation-e5b2a.web.app/",
        githubLink: "https://github.com/SDNATH-Git/blood-donation-clientset",
    },
    {
        id: "foodiehub",
        name: "🍽️ Food Sharing Website",
        images: [p2_1, p2_2, p2_3, p2_4, p2_5],
        description:
            "Food Sharing is a full-stack web application that helps reduce food waste by connecting donors with people in need. Donors can list surplus food items and recipients can request them. The app includes user roles, a dynamic dashboard, search & filter features, and a responsive UI.",
        tech: ["React", "TailwindCSS", "Firebase", "Node.js", "Express.js", "MongoDB"],
        liveLink: "https://example.com",
        githubLink: "https://github.com/example",
    },
    {
        id: "edulearn",
        name: "🩺 MedicalAppointment Application",
        images: [p3_1, p3_2, p3_3, p3_4, p3_5],
        description:
            "What about getting a doctor appointment app with ease and convenience? Mobile devices are now utilized for more than just making calls and sending texts. Consumers use smartphones for various tasks, including reading books, shopping online, finding jobs, and even finding dates. Many people only use their smartphones to connect to the web. ",
        tech: ["React", "Express.js", "MongoDB", "Stripe", "JWT Auth"],
        liveLink: "https://cool-lollipop-ad7e95.netlify.app/",
        githubLink: "https://github.com/SDNATH-Git/medical-appointment-application?tab=readme-ov-file",
    },
];

export default function Projects() {
    return (
        <section
            id="project"
            className="md:my-10 lg:my-20 py-16 px-5 md:px-5 lg:px-10"
        >
            <div>
                <div className="flex justify-center items-center gap-3 text-2xl md:text-4xl lg:text-4xl text-orange-500 font-bold text-center pb-14">
                    <FaDiagramProject />
                    <h1>My Projects</h1>
                </div>

                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-4 md:p-6 flex flex-col lg:flex-row gap-6 mb-8 border border-orange-500"
                    >
                        {/* Left: Carousel */}
                        <div className="lg:w-1/2 w-full rounded-lg overflow-hidden shadow-lg">
                            <Carousel
                                showThumbs={false}
                                infiniteLoop
                                autoPlay
                                interval={3000}
                                showStatus={false}
                                swipeable
                                emulateTouch
                            >
                                {project.images.map((img, i) => (
                                    <div key={i}>
                                        <img
                                            src={img}
                                            alt={`${project.name} ${i + 1}`}
                                            className="object-cover w-full h-full rounded-lg"
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>

                        {/* Right: Content */}
                        <div className="lg:w-1/2 w-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">
                                    {project.name}
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${idx === 0
                                                ? "bg-blue-600 text-white"
                                                : idx === 1
                                                    ? "bg-orange-500 text-white"
                                                    : idx === 2
                                                        ? "bg-green-600 text-white"
                                                        : idx === 3
                                                            ? "bg-gray-500 text-white"
                                                            : "bg-gray-700 text-white"
                                                }`}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                                >
                                    <FaExternalLinkAlt /> Live
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition"
                                >
                                    <FaGithub /> GitHub
                                </a>
                                <Link
                                    to={`/project/${project.id}`}
                                    className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg transition"
                                >
                                    <FaEye /> Details
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

