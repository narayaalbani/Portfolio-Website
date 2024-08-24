import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-pixelify)",
    body: "var(--font-pixelify)",
  },
  fontSizes: {
    "5xl": "80px",
    "4xl": "61px",
    "3xl": "47px",
    "2xl": "36px",
    xl: "27px",
    lg: "21px",
    base: "16px",
    sm: "12px",
    xs: "9px",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  colors: {
    light: "#f8f8ff",
    grey: "#525252",
    dark: "#0c0c0c",
    red: "#F22E2E",
    yellow: "#F2A413",
    green: "#04BF9D",
    blue: "#1A4AD9",
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "light",
        color: "dark",
        scrollBehavior: "smooth",
      },
    },
  },
});
