// import React from "react";
// import {
//     FaHtml5,
//     FaCss3Alt,
//     FaJs,
//     FaReact,
//     FaNodeJs,
//     FaGitAlt,
//     FaGithub
// } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiExpress, SiFigma } from "react-icons/si";
// import { motion, useAnimation } from "framer-motion";

// const Skills = () => {
//     const skills = {
//         Frontend: [
//             { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
//             { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
//             { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 85 },
//             { name: "React", icon: <FaReact className="text-cyan-400" />, level: 90 },
//             { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: 88 },
//         ],
//         Backend: [
//             { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
//             { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: 80 },
//             { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 83 },
//         ],
//         Tools: [
//             { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 90 },
//             { name: "GitHub", icon: <FaGithub className="text-white" />, level: 95 },
//             { name: "Figma", icon: <SiFigma className="text-pink-500" />, level: 70 },
//         ],
//     };
//     const scrollAnimation = (direction = "left") => ({
//         animate: {
//             x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
//         },
//         transition: {
//             repeat: Infinity,
//             repeatType: "loop",
//             ease: "linear",
//             duration: 15,
//         },
//     });

//     const SkillRow = ({ skillList, direction }) => {
//         const controls = useAnimation();

//         React.useEffect(() => {
//             controls.start(scrollAnimation(direction).animate);
//         }, [controls, direction]);

//         return (
//             <div className="overflow-hidden w-full">
//                 <motion.div
//                     className="flex gap-6"
//                     animate={controls}
//                     transition={scrollAnimation(direction).transition}
//                     onMouseEnter={() => controls.stop()}
//                     onMouseLeave={() => controls.start(scrollAnimation(direction).animate)}
//                 >
//                     {[...skillList, ...skillList].map((skill, index) => (
//                         <div
//                             key={index}
//                             className="flex flex-col items-center p-3 min-w-[130px] bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300"
//                         >
//                             <div className="text-5xl mb-3">{skill.icon}</div>
//                             <p className="text-lg font-medium mb-2">{skill.name}</p>
//                             <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
//                                 <div
//                                     className="bg-orange-500 h-2"
//                                     style={{ width: `${skill.level}%` }}
//                                 ></div>
//                             </div>
//                             <span className="text-sm mt-1 text-gray-300">
//                                 {skill.level}%
//                             </span>
//                         </div>
//                     ))}
//                 </motion.div>
//             </div>
//         );
//     };

//     return (
//         <section id="skills" className="text-white py-16 lg:mb-20">
//             <div className="px-5 md:px-5 lg:px-10">
//                 <h2 className="text-4xl text-orange-500 font-bold text-center mb-10">
//                     💡 My Skills
//                 </h2>

//                 <h3 className="text-2xl font-semibold mb-6 border-l-4 border-orange-500 pl-3">
//                     Frontend
//                 </h3>
//                 <SkillRow skillList={skills.Frontend} direction="right" />

//                 <h3 className="text-2xl font-semibold mt-10 mb-6 border-l-4 border-orange-500 pl-3">
//                     Backend
//                 </h3>
//                 <SkillRow skillList={skills.Backend} direction="left" />

//                 <h3 className="text-2xl font-semibold mt-10 mb-6 border-l-4 border-orange-500 pl-3">
//                     Tools
//                 </h3>
//                 <SkillRow skillList={skills.Tools} direction="right" />
//             </div>
//         </section>
//     );
// };

// export default Skills;


import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss, SiMongodb, SiExpress, SiFigma } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";

/* ================= SKILL DATA ================= */
const skillsData = {
    Frontend: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 85 },
        { name: "React", icon: <FaReact className="text-cyan-400" />, level: 90 },
        { name: "Typescript", icon: <BiLogoTypescript className="text-blue-500" />, level: 90 },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, level: 88 },
    ],
    Backend: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
        { name: "Express", icon: <SiExpress className="text-gray-300" />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 83 },
    ],
    Tools: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 90 },
        { name: "GitHub", icon: <FaGithub className="text-white" />, level: 95 },
        { name: "Figma", icon: <SiFigma className="text-pink-500" />, level: 70 },
    ],
};

/* ================= ICON GRID ================= */
const IconGrid = ({ title, skills }) => (
    <div>
        <h3 className="text-2xl font-semibold mb-6 border-l-4 border-orange-500 pl-3">
            {title}
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {skills.map((skill, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.25, rotate: 10 }}
                    className="
            flex items-center justify-center
            text-5xl p-4 rounded-xl
            bg-gradient-to-r from-gray-900 to-gray-800
            shadow-lg hover:shadow-orange-500/50
            transition
          "
                >
                    {skill.icon}
                </motion.div>
            ))}
        </div>
    </div>
);

/* ================= SCROLL ROW ================= */
const ScrollRow = ({ skills, direction = "left" }) => {
    const controls = useAnimation();

    React.useEffect(() => {
        controls.start({
            x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
            transition: {
                repeat: Infinity,
                duration: 18,
                ease: "linear",
            },
        });
    }, [controls, direction]);

    return (
        <div className="overflow-hidden w-full">
            <motion.div
                className="flex gap-6 w-max"
                animate={controls}
                onMouseEnter={() => controls.stop()}
                onMouseLeave={() =>
                    controls.start({
                        x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
                        transition: { repeat: Infinity, duration: 18, ease: "linear" },
                    })
                }
            >
                {[...skills, ...skills].map((skill, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="
              min-w-[150px]
              bg-gradient-to-r from-gray-900 to-gray-800
              rounded-xl p-4 text-center
              shadow-lg hover:shadow-orange-500/40
              transition
            "
                    >
                        <div className="text-4xl mb-3 flex justify-center">{skill.icon}</div>
                        <p className="font-medium mb-2">{skill.name}</p>
                        <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                            <div
                                className="bg-orange-500 h-2"
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                        <span className="text-sm text-gray-300 mt-1 block">{skill.level}%</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

/* ================= MAIN COMPONENT ================= */
const Skills = () => {
    const allSkills = [
        ...skillsData.Frontend,
        ...skillsData.Backend,
        ...skillsData.Tools,
    ];

    return (
        <section id="skills" className="text-white py-20 overflow-hidden">
            <div className="px-5 md:px-8 lg:px-12 space-y-16">
                <h2 className="text-4xl text-orange-500 font-bold text-center">💡 My Skills</h2>

                {/* 🔹 ICON ONLY SECTIONS */}
                <IconGrid title="Frontend" skills={skillsData.Frontend} />
                <IconGrid title="Backend" skills={skillsData.Backend} />
                <IconGrid title="Tools" skills={skillsData.Tools} />

                {/* 🔹 SCROLLING SKILLS */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 border-l-4 border-orange-500 pl-3">
                        All Skills
                    </h3>
                    <ScrollRow skills={allSkills} direction="left" />
                </div>
            </div>
        </section>
    );
};

export default Skills;
