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
          href="https://github.com/janul2006/eztollhttps://github.com/Sheran101/Ez-Toll-SDGP" // 🔥 replace
          target="_blank"
          variants={item}
          className="md:col-span-1 glass p-5 rounded-xl glow cursor-pointer  block"
        >
          <h3 className="text-2xl font-bold">🚗 Ez-Toll Smart Gate</h3>
          <p className="text-[#FF3B3B] font-bold text-xl">92% Accuracy</p>
          <p className="text-gray-400 mt-2">
            AI-powered ANPR system using YOLOv8 & OCR.
          </p>
        </motion.a>

        {/* GOWASTE */}
        <motion.a
          href="https://github.com/janul2006/gowaste"
          target="_blank"
          variants={item}
          className="md:col-span-1 glass p-5 rounded-xl glow cursor-pointer  block"
        >
          <h3 className="font-bold">📱 GoWaste</h3>
          <p className="text-gray-400">UI/UX Prototype</p>
        </motion.a>

        {/* INCIDENT SYSTEM */}
        <motion.a
          href="https://github.com/janul2006/smart-incident-system"
          target="_blank"
          variants={item}
          className="md:col-span-1 glass p-5 rounded-xl glow cursor-pointer block"
        >
          <h3 className="font-bold">🚨 Smart Incident System</h3>
          <p className="text-gray-400">
            Fullstack dashboard using React & Spring Boot.
          </p>
        </motion.a>

      </motion.div>

    </section>
  );
}