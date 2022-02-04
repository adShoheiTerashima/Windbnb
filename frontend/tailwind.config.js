module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      red: theme('colors.red'),
      white: theme('colors.white'),
      gray: theme('colors.gray'),
    }),
    fontFamily: {
      Montserrat: ['Montserrat'],
      Mulish: ['Mulish'],
    },
    extend: {
      spacing: {
        4.5: '1.125rem',
        7.5: '1.875rem',
        12.5: '3.125rem',
        13: '3.25rem',
        67.5: '16.875rem',
        87.5: '21.875',
        98: '24.5rem',
        115: '28.75rem',
      },
      fontSize: {
        0.5: '0.5rem',
      },
      colors: {
        black: '#333',
        gray: {
          828282: '#828282',
          F2F2F2: '#F2F2F2',
          '4F4F4F': '#4F4F4F',
          BDBDBD: '#BDBDBD',
        },
        red: {
          EB5757: '#EB5757',
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
