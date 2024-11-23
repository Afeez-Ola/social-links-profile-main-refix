/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets", "./index.html", "./css"],
  theme: {
    extend: {},
    container: {
      center: true
    },
    colors: {
      grey: {
        light: "#333333",
        dark: "#1F1F1F",
        darkest: "#141414"
      },
      green:{
        DEFAULT: "#C4F82A"
      },
      white:{
        DEFAULT: "#FFFFFF"
      }
    }
  },
  plugins: [],
}

