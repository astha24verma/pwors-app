/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#ffcc00',
      },
      fontFamily: {
        'modern': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

