const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      green: colors.green,
      sky: colors.sky,
      gray: colors.gray,
      white: colors.white,
      slate: colors.slate,
      primary: {
        // // gray
        // 900: '#111827',
        // 700: '#334155';
        // 500: '#6b7280',
        // 400: '#9ca3af',
        // 300: '#d1d5db',
        // 200: '#e5e7eb',

        // sky
        // 900: '#0c4a6e',
        700: '#0369a1',
        500: '#0ea5e9',
        400: '#38bdf8',
        300: '#7dd3fc',
        200: '#bae6fd',

        // midnight blue
        900: '#011e6f',
        // 700: '#011e6f',
        // 500: '#011e6f',
        // 400: '#38bdf8',
        // 300: '#7dd3fc',
        // 200: '#bae6fd',
      },
      secondary: {
        // // purple
        // 700: '#6d28d9',
        // 600: '#7c3aed',
        // 200: '#ddd6fe',

        // sky blue
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
