/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        secondary: '#111827',
        card: '#1E293B',
        primary: '#3B82F6',
        accent: '#06B6D4',
        success: '#22C55E',
        muted: '#94A3B8',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
