module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '9rem',
    },
    colors: {
      altblue: {
        light: '#3546ff',
        DEFAULT: '#0214fe',
        dark: '#010eb2',
      },
    },
    fontFamily: {
      test: 'S',
      test2: 'test',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
