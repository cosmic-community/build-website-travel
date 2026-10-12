/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        charcoal: '#201F1D',
        sand: '#E8DFD2',
        clay: '#B5693F',
        'clay-light': '#D79468',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}