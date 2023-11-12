/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(172, 67%, 45%)",
        veryDarkCyan: "hsl(183, 100%, 15%)",
        darkGrayCyan: "hsl(186, 14%, 43%)",
        grayCyan: "hsl(184, 14%, 56%)",
        lightGrayCyan: "hsl(185, 41%, 84%)",
        veryLightCyan: "hsl(189, 41%, 97%)",
      },
    },
  },
  plugins: [],
};
