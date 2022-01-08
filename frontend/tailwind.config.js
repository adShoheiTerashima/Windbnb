module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({ red: theme('colors.red.1') }),
    fontFamily: {
      Montserrat: ['Montserrat'],
      Mulish: ['Mulish'],
    },
    extend: {
      spacing: {
        7.5: '1.875rem',
        '16px': '16px',
        '32px': '32px',
      },
      colors: {
        black: '#333',
        gray: {
          1: '#828282',
          2: '#F2F2F2',
        },
        red: {
          1: '#EB5757',
        },
      },
      borderRadius: {
        search: '1.14rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
