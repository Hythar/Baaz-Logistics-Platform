/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          baaz: {
            navy: '#003B5C',
            blue: '#00A0E3',
            green: '#006F51',
          },
        },
      },
    },
    plugins: [],
  };