"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profileImg from "../img/profile_image.png";

export default function About() {
  return (
    <motion.section
      id="about"
      className="px-10 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* GRID LAYOUT */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE (TEXT) */}
        <div>
          <h2 className="text-4xl font-bold">
            About <span className="text-[#FF3B3B]">Me</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-xl">
            I am a Software Engineering undergraduate passionate about Machine Learning, AI, and Fullstack development.

            I enjoy building real-world systems combining software and intelligent technologies.

            Currently learning Machine Learning, Algorithms, and Fullstack systems.

            My goal is to become a Machine Learning Engineer.
          </p>

          {/* TECH STACK */}
          <div className="mt-6 flex flex-wrap gap-3">
            {["Python","Java","C++","React","Spring Boot","YOLO","OpenCV"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 border border-[#FF3B3B] rounded-full text-sm hover:bg-[#FF3B3B] hover:text-white transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 rounded-full bg-[#FF3B3B]/20 blur-2xl"></div>

            <Image
              src = {profileImg}  
              alt="Janul Induwara"
              fill
              className="rounded-full object-cover border-4 border-[#FF3B3B]/30 shadow-xl"
            />
          </div>
        </div>

      </div>
    </motion.section>
  );
}