"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read current active theme from html class
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Dispatch event so canvas/reactive components update
    window.dispatchEvent(new CustomEvent("themechange", { detail: nextTheme }));
  };

  if (!mounted) {
    return (
      <div
        className={`w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400 ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-300" />
      ) : (
        <Moon className="w-4 h-4 text-zinc-700" />
      )}
    </button>
  );
}
