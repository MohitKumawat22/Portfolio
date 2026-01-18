"use client"

import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 transition-colors"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}