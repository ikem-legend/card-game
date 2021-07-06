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
    }),
    backgroundImage: (theme) => ({
      'error-image': "url('https://i.imgur.com/yW2W9SC.png')",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
