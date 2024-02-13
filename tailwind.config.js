/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary: "#f42c37",
        secondary: "#f42c37",
        yellowColor: "#fdc62e",
        greenColor: "#2dcc6f",
        blueColor: "#1376f4",
        whiteColor: "#eeeeee"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem"
        }
      }
    },
  },
  plugins: [],
}