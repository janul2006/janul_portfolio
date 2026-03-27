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
    <section className="min-h-screen flex flex-col justify-center px-5 md:px-10">

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        Janul Induwara:
        <br />
        <span className="text-[rgb(255,59,59)]">{displayed}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 text-gray-400 text-lg"
      >
        Software Engineering Undergraduate at IIT | ML Engineer & Full-Stack Developer
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-6 flex  sm:flex-row gap-4"
      >
        <button className="bg-[#FF3B3B] px-6 py-3 rounded-xl glow hover:scale-105">
          <a
          href="/Janul_Induwara_CV.pdf"
           target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF3B3B] px-6 py-3 rounded-xl glow hover:scale-105"
          >
      
          Download CV
          </a>
        </button>

        <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black hover:scale-105">
          View Projects
        </button>
      </motion.div>

    </section>
  );
}