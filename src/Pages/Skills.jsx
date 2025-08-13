import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFigma } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";

const Skills = () => {
    const skills = {
        Frontend: [
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 85 },
            { name: "React", icon: <FaReact className="text-cyan-400" />, level: 90 },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: 88 },
        ],
        Backend: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
            { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: 80 },
            { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 83 },
        ],
        Tools: [
            { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 90 },
            { name: "GitHub", icon: <FaGithub className="text-white" />, level: 95 },
            { name: "Figma", icon: <SiFigma className="text-pink-500" />, level: 70 },
        ],
    };
    const scrollAnimation = (direction = "left") => ({
        animate: {
            x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        },
        transition: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 15,
        },
    });

    const SkillRow = ({ skillList, direction }) => {
        const controls = useAnimation();

        React.useEffect(() => {
            controls.start(scrollAnimation(direction).animate);
        }, [controls, direction]);

        return (
            <div className="overflow-hidden w-full">
                <motion.div
                    className="flex gap-6"
                    animate={controls}
                    transition={scrollAnimation(direction).transition}
                    onMouseEnter={() => controls.stop()}
                    onMouseLeave={() => controls.start(scrollAnimation(direction).animate)}
                >
                    {[...skillList, ...skillList].map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-3 min-w-[130px] bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300"
                        >
                            <div className="text-5xl mb-3">{skill.icon}</div>
                            <p className="text-lg font-medium mb-2">{skill.name}</p>
                            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                <div
                                    className="bg-orange-500 h-2"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <span className="text-sm mt-1 text-gray-300">
                                {skill.level}%
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        );
    };

    return (
        <section id="skills" className="text-white py-16 lg:mb-20">
            <div className="px-5 md:px-5 lg:px-10">
                <h2 className="text-4xl text-orange-500 font-bold text-center mb-10">
                    💡 My Skills
                </h2>

                <h3 className="text-2xl font-semibold mb-6 border-l-4 border-orange-500 pl-3">
                    Frontend
                </h3>
                <SkillRow skillList={skills.Frontend} direction="right" />

                <h3 className="text-2xl font-semibold mt-10 mb-6 border-l-4 border-orange-500 pl-3">
                    Backend
                </h3>
                <SkillRow skillList={skills.Backend} direction="left" />

                <h3 className="text-2xl font-semibold mt-10 mb-6 border-l-4 border-orange-500 pl-3">
                    Tools
                </h3>
                <SkillRow skillList={skills.Tools} direction="right" />
            </div>
        </section>
    );
};

export default Skills;
