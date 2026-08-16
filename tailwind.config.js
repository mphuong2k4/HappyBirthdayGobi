/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    fontFamily: { sans: ['Manrope', 'sans-serif'], display: ['Cormorant Garamond', 'serif'] },
    colors: { night: '#0b0914', ivory: '#f6f1e8', violet: '#7457d8', lilac: '#c9b8ff', pink: '#f2b6d5', champagne: '#f6dc9d' },
  } },
  plugins: [],
}
