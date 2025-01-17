/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-light": "#00b289",
        "purple-dark-letters": "#4c4d5f",
        "yellow-light": "#f8db62",
        "white-bg": "#fff",
        "blue-light-bg": "#F2FAFF",
      },
      brightness: {
        90: ".90",
      },
    },
  },
  plugins: [],
}
