"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import darkLogo from "../img/logo(dark).png";
import lightLogo from "../img/logo2.png";

export default function Navbar() {
  const [logoFailed, setLogoFailed] = useState(false);
  const [dark, setDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const activeLogo = dark ? darkLogo : lightLogo;

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
        <div
          className={`relative h-16 w-16 sm:h-20 sm:w-20 self-start sm:self-auto overflow-hidden rounded-full ${
            dark
              ? "border border-white/10 bg-black shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
              : "border border-[#D1D5DB] bg-white shadow-[0_10px_25px_rgba(15,23,42,0.14)]"
          }`}
        >
          {!logoFailed ? (
            <Image
              src={activeLogo}
              alt={dark ? "Janul Induwara dark mode logo" : "Janul Induwara light mode logo"}
              fill
              priority
              sizes="80px"
              className={`rounded-full object-cover ${
                dark
                  ? "scale-[1.5] brightness-100 contrast-110"
                  : "scale-[1.78] brightness-100 contrast-105"
              }`}
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
