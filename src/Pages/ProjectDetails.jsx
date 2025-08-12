// src/pages/ProjectDetails.js
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { FaGithub } from "react-icons/fa";
import { div } from "framer-motion/client";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20 bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen flex flex-col justify-center items-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">Project Not Found</h2>
        <Link to="/projects" className="text-orange-500 underline font-semibold hover:text-orange-600">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-25 lg:pt-40">

      <div className="mx-5 lg:mx-30 p-4 lg:p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-lg border-2 border-orange-500 ">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-6 text-orange-500 tracking-wide drop-shadow-md">
          {project.title}
        </h1>
        <p className="text-gray-300 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-orange-500 border-b-2 border-orange-500 inline-block pb-1">
            Tech Stack
          </h2>
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-medium ${index === 0
                  ? "bg-blue-600 text-white"
                  : index === 1
                    ? "bg-orange-500 text-white"
                    : index === 2
                      ? "bg-green-600 text-white"
                      : index === 3
                        ? "bg-gray-500 text-white"
                        : "bg-gray-700 text-white"
                  }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer w-full h-full"
              loading="lazy"
            />
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold shadow-md transition min-w-[140px] text-center"
          >
            Live Site
          </a>
          <a
            href={project.githubClient}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-4 sm:px-6 py-2 rounded-lg flex items-center gap-2 font-semibold shadow-md transition min-w-[140px] justify-center"
          >
            <FaGithub /> Client Repo
          </a>
          {project.githubServer && (
            <a
              href={project.githubServer}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 sm:px-6 py-2 rounded-lg flex items-center gap-2 font-semibold shadow-md transition min-w-[140px] justify-center"
            >
              <FaGithub /> Server Repo
            </a>
          )}
        </div>

        {/* Challenges */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-orange-500 border-b-2 border-orange-500 inline-block pb-1">
            Challenges Faced
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="leading-relaxed">{challenge}</li>
            ))}
          </ul>
        </div>

        {/* Improvements */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-orange-500 border-b-2 border-orange-500 inline-block pb-1">
            Potential Improvements
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
            {project.improvements.map((improve, index) => (
              <li key={index} className="leading-relaxed">{improve}</li>
            ))}
          </ul>
        </div>

        <Link
          to="/"
          className=" btn mt-12 text-orange-500  font-bold text-xl hover:text-orange-600 transition"
        >
          ← Back to Projects
        </Link>
      </div>

    </div>
  );
}
