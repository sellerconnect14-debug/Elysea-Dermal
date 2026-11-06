/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#172C52',
        gold: '#BC9752',
        'gold-deep': '#7F6128', // dourado escurecido: usar em texto sobre fundo claro (contraste)
        sand: '#DFDBD3',
        ivory: '#F4F2EE',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope Variable"', 'Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
