import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./hoc/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: { "hero-pattern": "url('/herobg.png')" },
      screens: { xs: "450px" },
      boxShadow: { card: "0px 35px 120px -15px #211e35" },
      fontFamily: { poppins: ["var(--poppins)"], gugi: ["var(--gugi)"] },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        background: "#11998e",
        foreground: "hsl(213 31% 91%)",
        destructive: {
          DEFAULT: "hsl(0 63% 31%)",
          foreground: "hsl(210 40% 98%)",
        },
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "scroll-left": {
          from: { transform: "translateX(80%)" },
          to: { transform: "translateX(calc(-100% - 1.5rem))" },
        },
        "scroll-left-1": {
          from: { transform: "translateX(20%)" },
          to: { transform: "translateX(calc(-100% - 1.5rem))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll-left": "scroll-left 30s linear infinite alternate",
        "scroll-left-1": "scroll-left-1 45s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
