const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      darkGray: '#425663',
      lightGray: '#B0CFD1',
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
    },
    fontFamily: {
      header: ['Source Sans Pro', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'login-background': "url('./img/login-background.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
