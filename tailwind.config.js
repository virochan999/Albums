/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-color': '#0B0C10',
        'text-skyblue': '#66FCF1'
      }
    },
  },
  plugins: [],
}

