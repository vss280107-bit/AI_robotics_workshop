/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6D28D9',
          light: '#8B5CF6',
          dark: '#5B21B6',
        },
        accent: '#F59E0B',
        surface: '#F9FAFB',
      },
      fontFamily: {
        display: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'card': '0 4px 20px rgba(109, 40, 217, 0.1)',
        'card-hover': '0 8px 30px rgba(109, 40, 217, 0.2)',
      }
    },
  },
  plugins: [],
}
