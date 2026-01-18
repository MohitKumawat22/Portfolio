import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add both fonts here
        poppins: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"],
      },
      
    },
  },
  plugins: [],
};
export default config;