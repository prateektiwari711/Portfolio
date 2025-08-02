import React from "react";
import taskMateImg from "../assets/taskmate.png";
import shopitImg from "../assets/filmvault.png";
import aivscImg from "../assets/aivsc-journey.jpg";

const projects = [
  {
    id: 1,
    title: "Shopit",
    description: "Inventory Mangement app for your shop",
    techStack: ["Node.js", "MongoDB", "React.js"],
    link: "https://shopit-frontend-eight.vercel.app/",
    image: shopitImg,
    title: "AIVSC JOURNEY",
    description:
      "One stop solution for all study material for AIVSC preparation journey.",
    techStack: ["Node.js", "MongoDB", "React.js", "Express.js"],
    link: "https://aivsc-journey.vercel.app/",
    image: aivscImg,
  },
  {
    id: 2,
    title: "TaskMate",
    description: "A task management app with login functionality and add-ons.",
    techStack: ["Node.js", "MongoDB", "React.js"],
    link: "https://taskmate-pearl.vercel.app/",
    image: taskMateImg,
  },
  {
    id: 3,
    title: "AIVSC JOURNEY",
    description:
      "One stop solution for all study material for AIVSC preparation journey.",
    techStack: ["Node.js", "MongoDB", "React.js", "Express.js"],
    link: "https://aivsc-journey.vercel.app/",
    image: aivscImg,
  },
];

function Projects() {
  return (
    <div className="bg-[rgb(30,30,30)] text-white min-h-screen py-16">
      <h1 className="text-5xl font-bold text-center text-[rgb(101,251,218)] mb-12">
        Recent Projects
      </h1>
      <h2 className="text-2xl font-bold text-center text-white mb-12">
        I have worked on a wide range of projects. From web apps to android
        apps. Here are some of my projects.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 animate-[slideIn_0.8s_ease-out] transition-all">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[rgb(20,20,20)] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-lg mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-black text-white px-3 py-2 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(101,251,218)] text-black px-2 py-2 rounded font-semibold hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
