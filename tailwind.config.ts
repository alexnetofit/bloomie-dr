import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bloomie palette — coral red lifted from the pouch
        bloom: {
          50: "#fdf3f1",
          100: "#fbe1dc",
          200: "#f6c2b8",
          300: "#ee9c8d",
          400: "#e36e58",
          500: "#d4482f",
          600: "#bc3823",
          700: "#9d2c1b",
          800: "#7e2517",
          900: "#5d1f15",
          950: "#3a120a",
        },
        // Off-white cream from the pouch background
        cream: {
          50: "#fdfaf3",
          100: "#f9f0dd",
          200: "#f3e1bb",
          300: "#ead08a",
        },
        // Rose petals on the pack
        rose: {
          100: "#fde6e6",
          200: "#fbd0d0",
          300: "#f7adac",
          400: "#ee8585",
          500: "#e15c5c",
        },
        // Strawberry juicy accent
        berry: {
          200: "#fbb3b3",
          400: "#e64545",
          600: "#b22424",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
