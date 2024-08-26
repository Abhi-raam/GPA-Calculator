/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryGreen: "#ebf6fc",
        SecondaryGreen: "#30cfb3",
      },
    },
  },
  plugins: [require("daisyui")],
}

