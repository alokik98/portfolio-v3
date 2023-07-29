/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: { max: "375px" },
      sm: { max: "425px" },
      md: { max: "768px" },
      lg: { max: "1080px" },
      xl: { max: "1280px" },
      "2xl": { max: "1366px" },
      "3xl": { max: "1440px" },
      "4xl": { max: "1920px" },
      "2k": { max: "2160px" },
      "4k": { max: "2560px" },
    },
  },
  plugins: [],
};
