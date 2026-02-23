import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F1B2D",
          light: "#1A2A42",
          dark: "#0A1220",
          50: "#E8EDF4",
          100: "#C5D1E0",
          200: "#8BA3C1",
          300: "#5175A2",
          400: "#2B4D78",
          500: "#1A2A42",
          600: "#0F1B2D",
          700: "#0A1220",
          800: "#060D18",
          900: "#030810",
        },
        earth: {
          DEFAULT: "#3E2C1C",
          light: "#5C4033",
          warm: "#6B4D3A",
          50: "#F5F0EB",
          100: "#E6DCD3",
          200: "#C9B8A8",
          300: "#A08B76",
          400: "#7A6652",
          500: "#5C4033",
          600: "#3E2C1C",
          700: "#2A1D12",
        },
        gold: {
          DEFAULT: "#C5A55A",
          light: "#D4BA7A",
          dark: "#A8893E",
          50: "#FBF7ED",
          100: "#F5ECCE",
          200: "#EADAA0",
          300: "#D4BA7A",
          400: "#C5A55A",
          500: "#A8893E",
          600: "#8A6E2C",
        },
        cream: {
          DEFAULT: "#FAF8F5",
          light: "#FEFCF9",
          dark: "#F0EDE8",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        prompt: ["var(--font-prompt)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
