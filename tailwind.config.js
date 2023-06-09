/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#092C4C",
        secondary: "#F2994A",
        info: "#2F80ED",
        success: "#27AE60",
        warning: "#E2B93B",
        error: "#EB5757",
        black: {
          1: "#000000",
          2: "#1D1D1D",
          3: "#282828",
        },
        grey: {
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          4: "#BDBDBD",
          5: "#E0E0E0",
        },
        mainText: '#8887AE',
        mainBlue: '#2E2BA6',
        mainDark: '#272D3D',
        mainYellow: '#F2994A',
        mainPink: '#D23C8F'
      },
      fontFamily: {
        main: ['PT Sans', "sans-serif"],
        title: ['Changa One', "cursive"],
        inter: ['Inter', "sans-serif"],
      }
    },
  },
  plugins: [],
};
