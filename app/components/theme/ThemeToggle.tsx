"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const savedTheme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : null;

  const [dark, setDark] = useState(savedTheme === "dark");

  useEffect(() => {
    // Load user preference from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow-md"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
