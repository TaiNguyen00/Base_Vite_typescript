/** @type {import('tailwindcss').Config} */

const COLORS = {
  primary: 'var(--primary)',
  baseBackground: 'var(--baseBackground)'
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: COLORS,
    extend: {}
  },
  plugins: []
}
