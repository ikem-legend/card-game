module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      'near-black': '#00000080',
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'deep-green': '#0A863E',
      'medium-yellow': '#EFCE4B',
    }),
    backgroundImage: (theme) => ({
      'error-image': "url('https://i.imgur.com/yW2W9SC.png')",
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      'light-yellow': '#FFF48C',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      'medium-yellow': '#EFCE4B',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
