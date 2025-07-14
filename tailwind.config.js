/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        'beauty-pink': '#FF99CC',
        'beauty-purple': '#D8BFD8',
        'beauty-dark': '#1F2937',
        'beauty-yellow': '#FFD700',
      },
    },
  },
  plugins: [],
}