/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ['Bodoni72C'],
      },
      screens: {
        sm: '300px',
        md: '400px',
        desktop: '500px',
      },
      colors: {
        gray: {
          100: '#DDDDDD',
          200: '#959595',
          300: '#282828',
          400: '#D9D9D9',
          500: '#EEEEEE',
          600: '#9D9D9D',
        },
      },
      backgroundImage: {
        'tab-gradient':
          'linear-gradient(0deg, #909090 -172.73%, rgba(217, 217, 217, 0.00) 100%, #FFF 100%)',
        'random-coin-gradient':
          'radial-gradient(50% 50% at 50% 50%, #FFF 70.5%, rgba(255, 255, 255, 0.00) 100%)',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
})
