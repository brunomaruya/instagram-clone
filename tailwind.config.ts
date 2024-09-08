import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // fuchsia: colors.fuchsia,
        blueText: "#0072BD",
        blueBg: "#3797F0",
        grayBg: "#262626",
        grayBg2: "#363636",
        grayBorder: "#868686",
        grayBorder2: "#333333",
        sidebarBtnHover: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
export default config;
