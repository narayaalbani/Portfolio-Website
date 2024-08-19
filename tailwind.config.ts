import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "5xl": ["80px", "120%"],
      "4xl": ["61px", "120%"],
      "3xl": ["47px", "120%"],
      "2xl": ["36px", "120%"],
      xl: ["27px", "120%"],
      lg: ["21px", "120%"],
      base: ["16px", "120%"],
      sm: ["12px", "120%"],
      xs: ["9px", "120%"],
    },
    extend: {
      colors: {
        light: "#f8f8ff",
        grey: "#525252",
        dark: "#0c0c0c",
        red: "#F22E2E",
        yellow: "#F2A413",
        green: "#04BF9D",
        blue: "#1A4AD9",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
