import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bloom: {
          50: "#f3faf3",
          100: "#e3f3e3",
          200: "#c7e6c8",
          300: "#9ad29c",
          400: "#65b568",
          500: "#3f9742",
          600: "#2e7a32",
          700: "#26602a",
          800: "#214d24",
          900: "#1c4020",
          950: "#0c220e",
        },
        cream: {
          50: "#fdfbf6",
          100: "#f9f3e3",
          200: "#f1e7c8",
          300: "#e6d39c",
        },
        peach: {
          200: "#fbd9c2",
          300: "#f8bb96",
          400: "#f49a68",
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
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
