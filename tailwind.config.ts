import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bloomie palette — rose / cherry blossom, sem notas marrons
        bloom: {
          50: "#fff5f8",
          100: "#ffe2ed",
          200: "#ffc1d6",
          300: "#ff95b8",
          400: "#f6648f",
          500: "#ea3b6e",
          600: "#d12158",
          700: "#ab1a47",
          800: "#841338",
          900: "#5c0d27",
          950: "#34061a",
        },
        // Cream marfim — pra fundo e wordmark sobre vermelho
        cream: {
          50: "#fffbf6",
          100: "#fdf2e2",
          200: "#f8e3c5",
          300: "#eecf95",
        },
        // Rosa pétala (soft)
        rose: {
          100: "#ffeef3",
          200: "#fdd7e2",
          300: "#fab8cd",
          400: "#f592b2",
          500: "#ed6896",
        },
        // Vermelho cereja vibrante (acentos pop)
        cherry: {
          400: "#ff5478",
          500: "#f0335c",
          600: "#d11e4a",
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
