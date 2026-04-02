"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="px-10 py-20">

      <h2 className="text-4xl font-bold mb-10">
        Featured <span className="text-[#FF3B3B]">Projects</span>
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid md:grid-cols-3 gap-6"
      >

        {/* EZ-TOLL */}
  <motion.a
    href="https://github.com/janul2006/Ez-Toll-SDGP"
    target="_blank"
    rel="noopener noreferrer"
    variants={item}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="glass p-6 rounded-2xl glow cursor-pointer block transition-all duration-300"
  >
    <h3 className="text-2xl font-bold mb-1">
       Ez-Toll Smart Gate
    </h3>

    <p className="text-[#FF3B3B] font-bold text-lg">
       92% Accuracy
    </p>

    <p className="text-gray-400 mt-3 text-sm leading-relaxed">
      AI-powered automatic number plate recognition system using YOLOv8 
      and OCR to enable real-time vehicle identification and smart toll automation.
    </p>

    <div className="mt-4 flex flex-wrap gap-2 text-xs">
      <span className="bg-gray-800 px-2 py-1 rounded">YOLOv8</span>
      <span className="bg-gray-800 px-2 py-1 rounded">OCR</span>
      <span className="bg-gray-800 px-2 py-1 rounded">Computer Vision</span>
      <span className="bg-gray-800 px-2 py-1 rounded">Python</span>
    </div>

    <div className="mt-4 text-xs text-gray-500">
      • AI •  Smart Transport •  Computer Vision
    </div>
  </motion.a>

        {/* GOWASTE */}

        <motion.a
          href="https://github.com/janul2006/gowaste"
          target="_blank"
          rel="noopener noreferrer"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="glass p-6 rounded-2xl glow cursor-pointer block transition-all duration-300"
        >
          <h3 className="text-2xl font-bold mb-1">
             GoWaste
          </h3>

          <p className="text-[#00FF9C] font-bold text-lg">
            Smart Waste Solution
          </p>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            A UI/UX prototype designed to improve waste management systems through 
            user-friendly interfaces, promoting sustainable and efficient urban waste handling.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-800 px-2 py-1 rounded">Figma</span>
            <span className="bg-gray-800 px-2 py-1 rounded">UI/UX</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Design Thinking</span>
          </div>

          <div className="mt-4 text-xs text-gray-500">
             • Design •  Sustainability •  UX
          </div>
        </motion.a>

        {/* INCIDENT SYSTEM */}
        <motion.a
          href="https://github.com/janul2006/smart-incident-system"
          target="_blank"
          rel="noopener noreferrer"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="glass p-6 rounded-2xl glow cursor-pointer block transition-all duration-300"
        >
          <h3 className="text-2xl font-bold mb-1">
             Smart Incident System
          </h3>

          <p className="text-[#00D1FF] font-bold text-lg">
             Real-Time Monitoring
          </p>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            A fullstack incident reporting and management system built with React 
            and Spring Boot, featuring real-time data handling and interactive dashboards.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-800 px-2 py-1 rounded">React</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Spring Boot</span>
            <span className="bg-gray-800 px-2 py-1 rounded">REST API</span>
            <span className="bg-gray-800 px-2 py-1 rounded">MySQL</span>
          </div>

          <div className="mt-4 text-xs text-gray-500">
             • Fullstack •  Dashboard •  Real-time
          </div>
        </motion.a>

        {/* PHISHING DETECTION SYSTEM */}


  <motion.a
    href="https://github.com/janul2006/phishing-detection-system"
    target="_blank"
    rel="noopener noreferrer"
    variants={item}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="md:col-span-1 glass p-6 rounded-2xl glow cursor-pointer block transition-all duration-300"
  >
    <h3 className="text-2xl font-bold mb-1">
      AI Phishing Detection Platform
    </h3>

    <p className="text-[#00FF9C] font-bold text-lg">
      Real-Time Cybersecurity System
    </p>

    <p className="text-gray-400 mt-3 text-sm leading-relaxed">
      A fullstack AI-powered platform that detects phishing URLs in real-time 
      using machine learning. Built with a microservices architecture integrating 
      Laravel, FastAPI, Redis caching, and a LightGBM model for high accuracy detection.
    </p>

    <div className="mt-4 flex flex-wrap gap-2 text-xs">
      <span className="bg-gray-800 px-2 py-1 rounded">Laravel</span>
      <span className="bg-gray-800 px-2 py-1 rounded">FastAPI</span>
      <span className="bg-gray-800 px-2 py-1 rounded">React</span>
      <span className="bg-gray-800 px-2 py-1 rounded">LightGBM</span>
      <span className="bg-gray-800 px-2 py-1 rounded">Redis</span>
      <span className="bg-gray-800 px-2 py-1 rounded">MySQL</span>
    </div>

    <div className="mt-4 text-xs text-gray-500">
      Microservices •  Machine Learning •  Cybersecurity
    </div>
  </motion.a>

      </motion.div>

    </section>
  );
}