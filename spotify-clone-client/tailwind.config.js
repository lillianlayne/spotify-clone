/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        darkGradient: 'linear-gradient(45deg, #121212, #212526)',
        blackish: '#ffffff10',
      },
    },
  },
  plugins: [
  ],
}

