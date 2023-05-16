/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
    'max-sm': '640px',
    'max-md': '768px',
    'max-lg': '1024px',
    'max-xl': '1280px',
    },
    extend: {
      colors: {
        "background": 'rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}