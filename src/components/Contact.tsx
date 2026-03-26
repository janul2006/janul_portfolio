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
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Let's <span className="text-[#FF3B3B]">Connect</span>
      </h2>

      {/* CONTACT CARDS */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        {/* EMAIL */}
        <div className="glass p-6 rounded-xl text-center 
                        hover:-translate-y-2 hover:shadow-lg transition duration-300">
          <h3 className="font-bold text-lg mb-2">📧 Email</h3>
          <a
            href="mailto:janul.induwara2006@gmail.com"
            className="text-gray-400 hover:text-[#FF3B3B] transition"
          >
            janul.induwara2006@gmail.com
          </a>
        </div>

        {/* GITHUB */}
        <div className="glass p-6 rounded-xl text-center 
                        hover:-translate-y-2 hover:shadow-lg transition duration-300">
          <h3 className="font-bold text-lg mb-2">💻 GitHub</h3>
          <a
            href="https://github.com/janul2006"
            target="_blank"
            className="text-gray-400 hover:text-[#FF3B3B] transition"
          >
            github.com/janul2006
          </a>
        </div>

        {/* LINKEDIN */}
        <div className="glass p-6 rounded-xl text-center 
                        hover:-translate-y-2 hover:shadow-lg transition duration-300">
          <h3 className="font-bold text-lg mb-2">🔗 LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/janul-induwara-7a67a9388/"
            target="_blank"
            className="text-gray-400 hover:text-[#FF3B3B] transition"
          >
            Connect with me
          </a>
        </div>

      </div>

      {/* EXTRA CTA */}
      <p className="text-center text-gray-400 mt-10">
        Open to internships and collaboration opportunities 🚀
      </p>

    </motion.section>
  );
}