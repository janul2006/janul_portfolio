"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="px-10 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Professional Journey
      </h2>

      <div className="border-l border-[#FF3B3B] pl-6 space-y-10 max-w-xl mx-auto">

        <div className="glass p-4 rounded-xl glow">
          <h3 className="font-bold text-lg">ML Engineer – Ez-Toll</h3>
          <p className="text-gray-400">
            Built ANPR system with 92% accuracy using YOLO & OCR.
          </p>
        </div>

        <div className="glass p-4 rounded-xl glow">
          <h3 className="font-bold text-lg">Field Operation Support – WHO</h3>
          <p className="text-gray-400">
            Supported survey operations and ensured data reliability.
          </p>
        </div>

      </div>
    </motion.section>
  );
}