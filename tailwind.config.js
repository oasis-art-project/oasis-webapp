module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
