/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#16a34a',
        highlight: '#facc15',
        cta: '#f97316',
        faq: '#7c3aed',
      },
    },
  },
  plugins: [require("daisyui")],
};