"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const text = "Building the Intelligence Behind the Stack";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28">

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
      >
        Janul Induwara:
        <br />
        <span className="text-[#FF3B3B]">{displayed}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl"
      >
        Software Engineering Undergraduate at IIT | ML Engineer & Full-Stack Developer
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4"
      >
        <button className="bg-[#FF3B3B] px-6 py-3 rounded-xl glow hover:scale-105 w-full sm:w-auto">
          <a
          href="/Janul_Induwara_CV.pdf"
           target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF3B3B] px-6 py-3 rounded-xl glow hover:scale-105 inline-block text-center"
          >
      
          Download CV
          </a>
        </button>

        <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black hover:scale-105 w-full sm:w-auto">
          View Projects
        </button>
      </motion.div>

    </section>
  );
}