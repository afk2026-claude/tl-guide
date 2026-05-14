/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        candy: {
          50: '#fff5f5',
          100: '#ffe0e6',
          200: '#ffc2ce',
          300: '#ff9bb0',
          400: '#fd6f8e',
          500: '#fd4a72',
          600: '#e83a5f',
          700: '#c52d4d',
          800: '#9e2740',
          900: '#7d2337',
        },
        magic: {
          50: '#f5f0ff',
          100: '#ede3ff',
          200: '#dccbfe',
          300: '#c2a8fd',
          400: '#a27cfb',
          500: '#8555f7',
          600: '#6c35e8',
          700: '#5c26d6',
          800: '#4d20b0',
          900: '#401b8f',
        }
      },
      fontFamily: {
        cute: ['"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 4s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'pop-in': 'popIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(5deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-8deg)' },
          '75%': { transform: 'rotate(8deg)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.9) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        }
      }
    }
  },
  plugins: []
};
