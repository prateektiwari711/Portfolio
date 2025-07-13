import React, { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    name: "React",
    icon: <FaReact />,
    color: "text-blue-500",
    percentage: 90,
  },
  {
    id: 2,
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
    percentage: 75,
  },
  {
    id: 3,
    name: "Database",
    icon: <FaDatabase />,
    color: "text-yellow-500",
    percentage: 75,
  },
  {
    id: 4,
    name: "Coding",
    icon: <FaCode />,
    color: "text-red-500",
    percentage: 85,
  },
];

function CircularProgress({ percentage }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = ((100 - percentage) / 100) * 283;
    setOffset(progressOffset);
  }, [percentage]);

  return (
    <div className="relative w-40 h-40 flex justify-center items-center">
      <svg className="w-full h-full">
        <circle
          className="text-gray-700"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          r="45"
          cx="50%"
          cy="50%"
        />
        <circle
          className="text-[rgb(101,251,218)]"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          r="45"
          cx="50%"
          cy="50%"
          strokeDasharray="283"
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
      </svg>
      <span className="absolute text-3xl font-bold">{percentage}%</span>
    </div>
  );
}

function Skills() {
  return (
    <div className="bg-[rgb(30,30,30)] text-white min-h-[80vh] py-8">
      <h1 className="text-5xl font-bold text-center text-[rgb(101,251,218)] mb-10">
        My Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className=" rounded-lg shadow-lg p-8 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={`text-7xl ${skill.color} mb-4`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
              style={{ filter: "drop-shadow(0 0 15px rgba(101,251,218,0.8))" }}
            >
              {skill.icon}
            </motion.div>

            <h2 className="text-3xl font-bold mb-4">{skill.name}</h2>

            <CircularProgress percentage={skill.percentage} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
