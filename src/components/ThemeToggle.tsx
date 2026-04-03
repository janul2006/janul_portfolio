"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
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

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-pill px-3 py-2 sm:px-4 rounded-full border border-[#FF3B3B] hover:bg-[#FF3B3B] transition text-sm sm:text-base"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
