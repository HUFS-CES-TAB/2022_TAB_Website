/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "bottom-sheet-up": {
          "0%": { transform: "translateY(50px)" },
          "100%": { transform: "translateY(0)" },
        },
        "bottom-sheet-down": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50px)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [""],
  },
};
