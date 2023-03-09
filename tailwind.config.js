/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: { 
      colors: {
        primary: "#27272a",
        secondary: "#fde68a",
        tertiary: "#a8a29e",
        quarternary:"#34d399",
      },
      fontFamily: {
        anek: ['Anek Gurmukhi'],
        Genos: ['Genos'],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
