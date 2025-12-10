// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        orbitArc: {
          "0%": {
            transform: "rotate(270deg) translateX(120px) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(390deg) translateX(120px) rotate(-390deg)",
          },
        },
        orbitArcSlow: {
          "0%": {
            transform: "rotate(270deg) translateX(150px) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(390deg) translateX(150px) rotate(-390deg)",
          },
        },
        orbitArcFast: {
          "0%": {
            transform: "rotate(270deg) translateX(90px) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(390deg) translateX(90px) rotate(-390deg)",
          },
        },
      },
      animation: {
        orbitArc: "orbitArc 4s linear infinite",
        orbitArcSlow: "orbitArcSlow 6s linear infinite",
        orbitArcFast: "orbitArcFast 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
