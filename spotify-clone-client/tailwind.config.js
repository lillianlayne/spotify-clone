/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '.7rem', 
      sm: '.85rem',
      base: '1rem', 
      xl: '1.25rem', 
      '2xl': '1.5rem',
      '3xl': '1.75rem', 
      '4xl': '2rem', 
      '5xl': '2.25rem'
    },
    fontFamily: {
      'sans': [
        'basic-sans', 'ui-sans-serif'
      ]
    },
    extend: {
     
    },
  },
  plugins: [
  ],
}

