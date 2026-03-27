"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
      <div className="flex justify-between items-center container-custom py-3">

        {/* LOGO */}
        <h1 className="text-lg md:text-xl font-bold">JI</h1>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:text-[#FF3B3B] transition">About</a>
          <a href="#experience" className="hover:text-[#FF3B3B] transition">Experience</a>
          <a href="#projects" className="hover:text-[#FF3B3B] transition">Projects</a>
          <a href="#contact" className="hover:text-[#FF3B3B] transition">Contact</a>

          <ThemeToggle />
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />

          <button onClick={() => setOpen(!open)} className="text-xl">
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden 
              flex flex-col items-center gap-6 
              py-6 
              bg-white dark:bg-black 
              border-t border-[#D1D5DB] dark:border-white/10
            "
          >
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}