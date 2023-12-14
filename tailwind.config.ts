import type { Config } from "tailwindcss";

const twColors = require("tailwindcss/colors");

const colors = {
  transparent: twColors.transparent,
  black: "#3C404A",
  gray: "#CDCDCD",
  white: twColors.white,
  primary: "#F9A22E",
  secondary: "#171C24",
  "bg-color": "#F2F2F5",
  aqua: "#268697",
  lightBlue: "#ABCDEF",
  red: twColors.red[400],
  gold: "#ffbc0b",
  orange: '#FFAC1C',
  bronze:'#CD7F32',
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
