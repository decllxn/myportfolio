/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode via a CSS class
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust the paths based on your project structure
  ],
  theme: {
    extend: {
      // Extend your theme here if needed
      fontFamily: {
        sans: ["Tektur", "sans-serif"],
      },
    },
  },
  plugins: [],
};