import type { Config } from "tailwindcss";
import { colors, widths } from "./src/styles/theme";

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
        sidebarBtnHover: colors.sidebarBtnHover,
        blackBg: colors.blackBg,
        grayBorder: colors.grayBorder,
        blueBg: colors.blueBg,
        grayBg: colors.grayBg,
        blueText: colors.blueText,
        grayBorder2: colors.grayBorder2,
      },
      width: {
        largeSidebarWidth: widths.largeSidebarWidth,
        feedWidth: widths.feedWidth,
      },
      minWidth: {
        largeSidebarWidth: widths.largeSidebarWidth,
      },
      maxWidth: {
        mainPageWidth: widths.mainPageWidth,
      },
      margin: {
        mediumSidebarWidth: widths.mediumSidebarWidth,
        largeSidebarWidth: widths.largeSidebarWidth,
      },
    },
  },
  plugins: [],
};
export default config;
