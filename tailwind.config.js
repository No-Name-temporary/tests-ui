const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Lexend', 'sans-serif'],
    },
    colors: {
      green: colors.green,
      sky: colors.sky,
      gray: colors.gray,
      white: colors.white,
      slate: colors.slate,
      primary: {
        900: '#011e6f',
        700: '#0369a1',
        500: '#0ea5e9',
        400: '#38bdf8',
        300: '#7dd3fc',
        200: '#bae6fd',
      },
      secondary: {
        800: '#5c9ef7',
        700: '#c4ddff',
        600: '#f0a824',
        200: '#dae6f7',
      },
      tertiary: {
        900: '#fafafa',
        200: '#c4ddff',
      },
      heading: {
        h1: '#011e6f',
        h2: '#011e6f',
        h3: '#011e6f',
        h4: '#1e293b',
        h5: '#64748b',
      },
      input: {
        placeholder: '#64748b',
        value: '#334155',
      },
      button: {
        still: '#011e6f',
        hover: '#495a8a',
      },
      table: {
        label: '#334155',
        value: '#334155',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
