/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ".7rem",
      sm: ".85rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
    },
    fontFamily: {
      sans: ["basic-sans", "ui-sans-serif"],
    },
    extend: {
      colors: {
        translucent1: "rgba(255, 255, 255, 0.1)",
        translucent2: "rgba(255, 255, 255, 0.2)",
        translucent3: "rgba(255, 255, 255, 0.3)",
        translucent4: "rgba(255, 255, 255, 0.4)",
        translucent5: "rgba(255, 255, 255, 0.5)",
        translucent6: "rgba(255, 255, 255, 0.6)",
        translucent7: "rgba(255, 255, 255, 0.7)",
      },
      keyframes: {
        "horizontal-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "drawer-open": {
          from: { transform: "translate(-50%, 50%)" },
          to: { transform: "translate(-50%, -50%)" },
        }, 
        "drawer-close": {
          from: { transform: "translate(-50%, -50%)" },
          to: { transform: "translate(-50%, 50%)" },
        }
      },
      animation: {
        "drawer-open": "drawer-open .5s ease-out",
        "drawer-close": "drawer-close .5s ease-out",
        "horizontal-scroll": "horizontal-scroll 45s linear infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
};
