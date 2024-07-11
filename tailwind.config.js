/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '18px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['32px', '40px'],
      '3xl': ['48px', '56px'],
      '4xl': ['56px', '64px'],
      '5xl': ['64px', '70px'],
    },
    extend: {
      colors: {
        black: {
          100: '#444444',
          300: '#333333',
          500: '#222222',
          700: '#111111',
          900: '#040404',
        },
        white: '#FFFFFF',
      }
    },
  },
  plugins: [],
}

