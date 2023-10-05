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
    },

    fontFamily: {
      berkshire: ["Berkshire Swash", "serif"],
      cinzel: ["Cinzel", "serif"]
    },

    extend: {
      pokeCard: ["w-1/3", "flex", "flex-col", "p-4"],
      voteButton: ["text-xl"],
    },
  },
  plugins: [],
}