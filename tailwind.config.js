module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': {
          DEFAULT: '#31A700',
          '50': '#FFFFFF',
          '100': '#DFFFDA',
          '200': '#A2FF8E',
          '300': '#6AFF41',
          '400': '#3EF300',
          '500': '#31A700',
          '600': '#2C8300',
          '700': '#236000',
          '800': '#183C00',
          '900': '#0B1800'
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
