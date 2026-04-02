"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is already applied
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 sm:px-4 rounded-full border border-[#FF3B3B] hover:bg-[#FF3B3B] transition text-sm sm:text-base"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}