import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-[rgb(30,30,30)] text-white min-h-screen py-16">
      <h1 className="text-5xl font-bold text-center text-[rgb(101,251,218)] mb-12">
        Contact Me
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4">
        <motion.div
          className="bg-[rgb(50,50,50)] rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

          <form className="flex flex-col space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-[rgb(70,70,70)] text-white focus:outline-none focus:ring-2 focus:ring-[rgb(101,251,218)]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-[rgb(70,70,70)] text-white focus:outline-none focus:ring-2 focus:ring-[rgb(101,251,218)]"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 rounded-lg bg-[rgb(70,70,70)] text-white focus:outline-none focus:ring-2 focus:ring-[rgb(101,251,218)]"
            />

            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="bg-[rgb(101,251,218)] text-black px-6 py-3 rounded-lg font-bold hover:bg-[rgb(50,200,200)] transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="bg-[rgb(50,50,50)] rounded-lg shadow-lg p-8 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6">Contact Info</h2>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[rgb(101,251,218)] text-2xl" />
              <p className="text-xl">prtiwari711@gmail.com</p>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="text-[rgb(101,251,218)] text-2xl" />
              <p className="text-xl">+91 9098246403</p>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[rgb(101,251,218)] text-2xl" />
              <p className="text-xl">Indore, India</p>
            </div>
          </div>

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
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
