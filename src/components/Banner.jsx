import React, { useState, useEffect, useMemo } from "react";
import Image from "../assets/me.jpg";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Banner() {
  const words = useMemo(() => ["Developer", "Freelancer", "Sportsman"], []);

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];

      if (isDeleting) {
        setText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 80 : 150);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words]);

  return (
    <div className="bg-[rgb(30,30,30)] text-white min-h-screen flex flex-col lg:flex-row justify-center items-center px-4 w-full">
      <div className="flex justify-center items-center w-full lg:w-1/3 h-[70vh] animate-[slideInLeft_1s_ease-out]">
        <img
          className="border-4 border-[rgb(101,251,218)] rounded-full object-cover max-w-[90%] max-h-[90%] lg:max-w-[60vh] lg:max-h-[60vh]"
          src={Image}
          alt="Profile 1"
        />
      </div>

      <div className="flex justify-center items-center flex-col w-full lg:w-2/3 h-full min-h-[60vh] animate-[slideInRight_1s_ease-out]">
        <h1 className="text-6xl font-bold my-2">Hi, I'm Prateek Tiwari</h1>

        <h2 className="text-5xl my-2">
          I'm a <label className="text-[rgb(101,251,218)]">{text}</label>
          <span className="text-[rgb(101,251,218)]">|</span>
        </h2>

        <p className="text-2xl justify-center items-center max-w-[80%] text-center leading-9">
          Full-Stack Developer with a passion for building dynamic, user-focused
          applications. Skilled in JavaScript, React.js, and learning backend
          technologies, with experience in embedded systems. Always eager to
          learn, collaborate, and create impactful solutions.
        </p>
        <div className="flex space-x-6 mt-8">
          <motion.a
            href="www.linkedin.com/in/prt711"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="text-4xl text-white hover:text-[rgb(101,251,218)]"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/prateektiwari711"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="text-4xl text-white hover:text-[rgb(101,251,218)]"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/prateek_tiwari_711/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="text-4xl text-white hover:text-[rgb(101,251,218)]"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
