"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/profile";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
fixed top-0 left-0 w-full z-50 
bg-white/70 dark:bg-black/60 
backdrop-blur-md 
border-b border-[#D1D5DB] dark:border-white/10
"
    >
      <div className="flex justify-between items-center px-10 py-4">

        {/* LOGO */}
        <h1 className="text-xl font-bold">{profile.initials}</h1>

        {/* NAV LINKS + THEME */}
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-[#FF3B3B] transition">
            About
          </a>
          <a href="#experience" className="hover:text-[#FF3B3B] transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-[#FF3B3B] transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#FF3B3B] transition">
            Contact
          </a>

          {/* 🌙 THEME BUTTON */}
          <ThemeToggle />
        </div>

      </div>
    </motion.nav>
  );
}