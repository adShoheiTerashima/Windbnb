module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        7.5: '1.875rem',
      },
      colors: {
        black: '#333',
        gray: {
          1: '#828282',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
