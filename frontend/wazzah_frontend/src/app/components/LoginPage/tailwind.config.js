/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 20s infinite linear",
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(5%, 10%) rotate(5deg)" },
          "50%": { transform: "translate(10%, 5%) rotate(0deg)" },
          "75%": { transform: "translate(5%, -5%) rotate(-5deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
