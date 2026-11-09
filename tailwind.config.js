module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#090707",
        gold: "#D8B477",
        brightgold: "#F1D6A1",
        cream: "#F3E9D7",
        muted: "#BDB4AA",
        burgundy: "#2B101A",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};