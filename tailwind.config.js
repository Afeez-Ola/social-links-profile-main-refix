/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets", "./index.html", "./css"],
  theme: {
    extend: {},
    container: {
      center: true
    },
    fontFamily: {
      'display':["Inter", sans-serif],
      'body':["Inter", sans-serif]
    }
  },
  plugins: [],
}

