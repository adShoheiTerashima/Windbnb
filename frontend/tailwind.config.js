module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({ red: theme('colors.red.1'), white: theme('colors.white') }),
    fontFamily: {
      Montserrat: ['Montserrat'],
      Mulish: ['Mulish'],
    },
    extend: {
      spacing: {
        4.5: '1.125rem',
        7.5: '1.875rem',
        12.5: '3.125rem',
        67.5: '16.875rem',
        98: '24.5rem',
        115: '28.75rem',
      },
      fontSize: {
        0.5: '0.5rem',
      },
      colors: {
        black: '#333',
        gray: {
          1: '#828282',
          2: '#F2F2F2',
          3: '#4F4F4F',
          4: '#BDBDBD',
        },
        red: {
          1: '#EB5757',
        },
      },
      placeholderColor: (theme) => theme('colors'),
      borderRadius: {
        '12px': '12px',
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
