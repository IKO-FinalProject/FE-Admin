/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {}
  },
  plugins: []
}
