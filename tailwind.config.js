/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#38bdf8',
        dark: '#0f172a',
        wave: '#4581F6',
      },
      screens: {
        '2xl': '1320px',
        'large': {'max': '1023px'},
        'tabMi': {'min': '640px', 'max': '1023px'},
      },
      backgroundImage: {
        'body-pattern': "url('/img/Background.png')",
        'footer-texture': "url('/img/wave2.png')",
      }
    },
  },
  plugins: [],
}
