/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5cc',
          300: '#8dd1a8',
          400: '#57b67d',
          500: '#339b5a',
          600: '#267d47',
          700: '#1f653a',
          800: '#1c5131',
          900: '#0d3b21',
        },
        accent: {
          50: '#faf8f3',
          100: '#f2ede1',
          200: '#e6d8c2',
          300: '#d6bf9a',
          400: '#c6a972',
          500: '#b89355',
          600: '#a17c49',
          700: '#86653e',
          800: '#6d5236',
          900: '#58432d',
        },
        neutral: {
          50: '#f9f9f7',
          100: '#f5f5f2',
          200: '#e8e8e4',
          300: '#d4d4cf',
          400: '#a8a8a0',
          500: '#8a8a80',
          600: '#6f6f66',
          700: '#5a5a52',
          800: '#4a4a44',
          900: '#3d3d38',
        }
      },
      letterSpacing: {
        'wide': '0.5px',
        'wider': '1px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'slide-up': 'slideUp 1.2s ease-out forwards',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(13, 59, 33, 0.1)',
        'premium-lg': '0 8px 40px rgba(13, 59, 33, 0.15)',
        'premium-xl': '0 16px 60px rgba(13, 59, 33, 0.2)',
      }
    },
  },
  plugins: [],
};