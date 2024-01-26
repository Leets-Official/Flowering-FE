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
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
})
