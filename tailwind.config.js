/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(113, 81, 95, 1) 81%, rgba(0, 0, 0, 1) 100%);',
      },
      keyframes: {
        blink: {
          to: { opacity: 1 },
          '50%': { opacity: 0 },
          from: { opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: ' translateX(0)' },
          '100%': { transform: 'translateX(900%)' },
        },
      },
    },
  },
  plugins: [],
};
