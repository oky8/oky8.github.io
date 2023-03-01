/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
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
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
