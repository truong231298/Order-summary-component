/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Paleblue': 'hsl(225, 100%, 94%)',
        'Brightblue': 'hsl(245, 75%, 52%)',
        'Verypaleblue': 'hsl(225, 100%, 98%)',
        'Desaturatedblue': 'hsl(224, 23%, 55%)',
        'Darkblue': 'hsl(223, 47%, 23%)'
      }
    },
  },
  plugins: [],
}