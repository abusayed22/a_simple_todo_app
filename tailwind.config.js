/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main_c': '#fecdd3',
        'red_c': '#dc2626',
        'yellow_c': '#f59e0b',
        'green_c': '#4ade80'
      },
    },
  },
  plugins: [],
}
