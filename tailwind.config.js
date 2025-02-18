/** @type {import('tailwindcss').Config} */
const COLORS = {
  primary: 'var(--primary)',
  baseBackground: 'var(--baseBackground)'
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: COLORS
    }
  },
  plugins: []
}
