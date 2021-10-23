module.exports = {
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.jsx',
      './src/**/*.js',
      './src/**/*.css',
    ],
  },
  theme: {
    extend: {
      colors: {
        'text': '#656565',
        'text-2': '#9B9B9B',
        'border': '#C2C2C2'
      },
      fill: {
        'text': '#656565',
        'text-2': '#9B9B9B',
        'border': '#C2C2C2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
