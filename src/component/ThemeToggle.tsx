"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button className="p-2 rounded-full" aria-label="Toggle theme">
        <div className="w-5 h-5" />
      </button>
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-5 h-5 overflow-hidden">
        {/* Sun icon */}
        <Sun
          className={`absolute inset-0 w-5 h-5 text-amber-500 transition-all duration-500 ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
          strokeWidth={2.5}
        />
        {/* Moon icon */}
        <Moon
          className={`absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-500 ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
          strokeWidth={2.5}
        />
      </div>
    </button>
  )
}