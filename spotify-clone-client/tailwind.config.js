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
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
        'horizontal-scroll': {
          from: {transform: 'translateX(0)'},
          to: {transform: 'translateX(-100%)'},
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'horizontal-scroll': 'horizontal-scroll 45s linear infinite'
      },
    },
  },
  plugins: [
  ],
}

