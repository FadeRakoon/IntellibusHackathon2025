/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "25%": { transform: "translate(100px, 50px) rotate(5deg)" },
          "50%": { transform: "translate(50px, 100px) rotate(-5deg)" },
          "75%": { transform: "translate(-50px, 50px) rotate(5deg)" },
          "100%": { transform: "translate(0px, 0px) rotate(0deg)" },
        },
      },
      animation: {
        float: "float 20s infinite linear",
      },
    },
  },
  plugins: [],
};
