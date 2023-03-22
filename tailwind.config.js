/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '12': 'repeat(12, minmax(0, 1fr))',
       
        // Complex site-specific row configuration
        // 'layout': '200px minmax(900px, 1fr) 100px',
      },
      gridRow: {
        'span-11': 'span 11 / span 11',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}