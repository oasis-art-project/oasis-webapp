module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkGray: '#425663',
      lightGray: '#B0CFD1',
    },
    fontFamily: {
      header: ['Source Sans Pro', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: theme => ({
       'login-background': "url('./img/login-background.png')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
