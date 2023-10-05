/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [
    require('./my-preset.js'),
  ],
  theme: {
    colors: {
      grass: "#5acdbd",
      fire: "#ffad52",
      water: "#5a9ca4",
      yellow: "#ffcb05",
      blue: "#2a75bb",
      red: "#f00000",
      white: "#f0f0f0",
      black: "#222224"
    },

    fontFamily: {
      pokemon: ["Pokemon Solid", "sans-serif"],
      gabarito: ["Gabarito", "cursive"]
    },

    extend: {},
  },
  plugins: [],
}