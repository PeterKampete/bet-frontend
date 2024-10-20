/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        Inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        richBlack: "#03252B",
        darkPurple: "#43082F",
        indigoDye: "#123156",
        primaryYellow: "#F09F00",
        primaryGray: "#939393",
        secondaryGray: "rgba(147, 147, 147, 0.9)",
        primaryGreen: "#009129",
        secondaryGreen: "#056A21",
      },
      screens: {
        xs: "280px",
        sm: "684px",
        md: "703px",
        lg: "900px",
        xl: { max: "1220px" },
      },
      boxShadow: {
        custom: "0px 0px 20px 0px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
