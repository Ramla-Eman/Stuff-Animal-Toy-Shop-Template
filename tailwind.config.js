/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-inner': 'inset 0 -11px 37px -18px rgba(0, 0, 0, 0.9)',
      },
      fontFamily: {
        'QuickSand': ['Quicksand', 'sans-serif']
      },
      screens: {
        'mmb': '300px', //mobile screens size
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

