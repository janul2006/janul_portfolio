"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="px-10 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold">
        Let's <span className="text-[#FF3B3B]">Connect</span>
      </h2>

      <div className="mt-4 space-y-2 text-gray-400">
        <p>Email: janul.induwara2006@gmail.com</p>
        <p>GitHub: github.com/janul2006</p>
        <p>LinkedIn: linkedin.com/in/janul-induwara-7a67a9388</p>
      </div>
    </motion.section>
  );
}