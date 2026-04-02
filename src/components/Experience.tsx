"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
        Professional Journey
      </h2>

      <div className="relative max-w-3xl mx-auto">

        {/* VERTICAL LINE */}
        <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-[#FF3B3B] transform -translate-x-1/2"></div>

        <div className="space-y-6 md:space-y-16">

          {/* EXPERIENCE (RIGHT SIDE) */}
          <div className="flex justify-start md:justify-end">
            <div className="w-full md:w-[45%] glass p-5 rounded-xl glow">
              <h3 className="font-bold text-lg">ML Engineer – Ez-Toll</h3>
              <p className="text-gray-400">
                Built ANPR system with 92% accuracy using YOLO & OCR.
              </p>
            </div>
          </div>

          <div className="flex justify-start md:justify-end">
            <div className="w-full md:w-[45%] glass p-5 rounded-xl glow">
              <h3 className="font-bold text-lg">Field Operation Support – WHO</h3>
              <p className="text-gray-400">
                Supported survey operations and ensured data reliability.
              </p>
            </div>
          </div>

          {/* EDUCATION (LEFT SIDE) */}
          <div className="flex justify-start">
            <div className="w-full md:w-[45%] glass p-5 rounded-xl glow">
              <h3 className="font-bold text-lg"> BSc Software Engineering</h3>
              <p className="text-gray-400">
                Informatics Institute of Technology (IIT)
              </p>
              <p className="text-gray-400 text-sm">
                Focus: AI, Machine Learning, Fullstack Development
              </p>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="w-full md:w-[45%] glass p-5 rounded-xl glow">
              <h3 className="font-bold text-lg"> Sri Sumangala College</h3>
              <p className="text-gray-400">
                Strong foundation in Mathematics, English & IT
              </p>
            </div>
          </div>

        </div>
      </div>

    </motion.section>
  );
}