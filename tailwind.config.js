import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    backgroundImage: {
      "hero": "url(assets/images/bg-hero.png)",
    },
    extend: {
      colors: {
        text: "#C99E71",
        bg: "#1C1814",
        whiteText: "#FFFFFF"
      },
    },
  },
  plugins: [],
};