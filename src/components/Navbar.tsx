"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "../img/logo.png";

export default function Navbar() {
  const [logoFailed, setLogoFailed] = useState(false);

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
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center px-4 sm:px-6 lg:px-10 py-3 sm:py-4">

        {/* LOGO */}
        <div className="relative h-14 w-14 sm:h-14 sm:w-14 self-start sm:self-auto">
          {!logoFailed ? (
            <Image
              src={logo}
              alt="Janul Induwara logo"
              fill
            
              priority
              className="rounded-full object-cover shadow-xl scale-150"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-full border border-[#D1D5DB] bg-white/80 text-sm font-bold text-black dark:border-white/10 dark:bg-black/40 dark:text-white">
              JI
            </div>
          )}
        </div>

        {/* NAV LINKS + THEME */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base sm:gap-6">
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
