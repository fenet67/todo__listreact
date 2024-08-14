/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#f4f4f4',
        dark: '#2d2d2d',
        blue: '#3490dc',
        green: '#38c172',
      }
    },
  },
  plugins: [],
}
