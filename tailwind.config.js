/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'loreal-red': '#C8102E',
        'loreal-red-dark': '#990B22',
        'loreal-white': '#FCFBF8',
        'loreal-black': '#0A0A0A',
        'loreal-charcoal': '#171717',
        'loreal-graphite': '#262626',
        'loreal-light-grey': '#E8DDD5',
        'loreal-grey': '#737373',
        gold: '#D4AF37',
        'gold-light': '#F3E5AB',
        charcoal: '#1C1C1C',
        graphite: '#383838',
        ivory: '#FAF8F5',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        cursive: ['Caveat', 'cursive'],
      },
      animation: {
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
