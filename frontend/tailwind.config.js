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
        '29px': '29px',
        '32px': '32px',
        26: '6.5rem',
        77: '19.25rem',
        113: '28.25rem',
      },
      fontSize: {
        h1: '1.75rem',
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
        listImage: '1.71rem',
      },
      boxShadow: {
        search: '0 1px 6px rgba(0,0,0,0.1)',
      },
      gridTemplateColumns: {
        propertyList: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
