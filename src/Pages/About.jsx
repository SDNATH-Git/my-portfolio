// AboutMe.jsx
import React from "react";
import { FaPaintBrush, FaCode, FaHiking, FaUserTag } from "react-icons/fa";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = () => {
    return (
        <div
            id="about"
            className="text-white bg-gradient-to-r from-gray-900 to-gray-800 mx-5 md:mx-5 lg:mx-10 p-6 md:p-12 rounded-3xl shadow-2xl my-16"
        >
            <h2 className="text-4xl text-center font-extrabold mb-8 text-orange-500 flex justify-center gap-2 pb-2">
                <FaUserTag />
                About Me
            </h2>

            <motion.section
                className="flex flex-col lg:flex-row items-center gap-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >


                {/* Right Side - Auto Sliding Images */}
                <motion.div
                    className="flex-1 max-w-sm rounded-3xl overflow-hidden shadow-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        interval={2500}
                        transitionTime={800}
                    >
                        <div>
                            <img src="https://i.ibb.co.com/s9dv9ZLj/shuvo.png" alt="Shuvo 1" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co.com/fGG7L72k/shuvo3.png" alt="Shuvo 2" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co.com/Cp3wff9C/shuvo-2.png" alt="Shuvo 3" />
                        </div>
                    </Carousel>
                </motion.div>


                {/* Left Content */}
                <div className="flex-1">
                    <motion.p
                        className="text-gray-300 mb-6 leading-relaxed text-lg"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Hello! I'm{" "}
                        <span className="font-bold text-orange-500">SD NATH</span>, a passionate MERN
                        stack developer. My programming journey started with a curiosity about the
                        web, and since then, I've been crafting dynamic and efficient web apps
                        using JavaScript, React, Node.js, Express, and MongoDB.
                    </motion.p>

                    <motion.p
                        className="text-gray-300 mb-6 leading-relaxed text-lg"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        I enjoy building interactive, user-friendly interfaces and solving complex
                        problems with creative solutions. Continuous learning is my fuel.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-8 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <FaCode className="text-orange-500 text-3xl" />
                            <span className="text-gray-400 text-lg font-medium">
                                Programming & Web Development
                            </span>
                        </div>
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <FaPaintBrush className="text-orange-500 text-3xl" />
                            <span className="text-gray-400 text-lg font-medium">Painting</span>
                        </div>
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <FaHiking className="text-orange-500 text-3xl" />
                            <span className="text-gray-400 text-lg font-medium">
                                Hiking & Outdoors
                            </span>
                        </div>
                    </motion.div>

                    <motion.p
                        className="text-gray-400 italic text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        "I believe creativity and technical skills combined can build inspiring
                        solutions that make a difference."
                    </motion.p>
                </div>


            </motion.section>
        </div>
    );
};

export default About;
