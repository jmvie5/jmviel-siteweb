/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins'],
        'josefin': ['"Josefin Sans"', 'sans-serif'],
        },
      colors:{
        "jmv_dark": "#0d1b2a",
        "jmv_lessDark": "#1b263b",
        "jmv_medium": "#415a77",
        "jmv_light": "#778da9",
        "jmv_white": "#e0e1dd"
      },
      screens: {
        'xxs': '430px',
  
        'xs': '500px',

      },
    },
  },
  plugins: [],
}

