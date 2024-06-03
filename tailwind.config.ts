import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      theme: {
        primary: "#ffffff",
        secondary: "#484848",
        tertiary: "#9A9A9A",
        darkPlus: "#060420",
        Dark: "#0D0A30",
        purplePlus: "#530061",
        darkMove: "#3B1462",
        lightMove: "#7828C8",
        pinkPlus: "#F31260",
        pink: "#BF1B8C",
        lightPink: "#B51D94",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
