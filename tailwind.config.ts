import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        iciWhite: "#F1FAFF",
        lightBlue: "#00EEF4",
        mediumBlue: "#005F6A",
        lightBlueGreen: "#007E89",
        veryLightTeal: "#009DA8",
        darkBlue: "#00424C",
        softGray: "#DCE4EA",
        mutedBlue: "#008FA3",
        accentGreen: "#20C997",
        lightGreen: "#22d5a0",
        accentYellow: "#FFCF33",
        mutedPink: "#FFC6D9",
        errorRed: "#FF6B6B",
        infoBlue: "#00A8CC",
        mutedGray: "#607D8B",
      },
      fontFamily: {
        dhivehi: ["DAM_Madheeh", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
