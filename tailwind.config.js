/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#e8f4f8',
          100: '#c5e2ed',
          200: '#8ec5d9',
          300: '#5aa8c4',
          400: '#2d8fb3',
          500: '#1a6a8a',
          600: '#1a4a5c',
          700: '#0f3345',
          800: '#0d2a3a',
          900: '#0a1f2b',
          950: '#060f17',
        },
        gold: {
          50:  '#fdf8ec',
          100: '#f9edcc',
          200: '#f2d898',
          300: '#e8be5f',
          400: '#dea530',
          500: '#c9a84c',
          600: '#b8922a',
          700: '#9a7620',
          800: '#7d5f1a',
          900: '#5c4512',
        },
        charcoal: {
          50:  '#f5f5f5',
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#9e9e9e',
          400: '#757575',
          500: '#525252',
          600: '#3d3d3d',
          700: '#2a2a2a',
          800: '#1a1a1a',
          900: '#111111',
          950: '#080808',
        },
        silver: {
          300: '#c8d6e0',
          400: '#8a9aaa',
          500: '#6b7f8e',
        }
      },
      fontFamily: {
        arabic: ['Tajawal', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideRight: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'teal-gold': 'linear-gradient(135deg, #1a4a5c 0%, #0d2a3a 50%, #9a7620 100%)',
        'hero-dark': 'linear-gradient(135deg, #060f17 0%, #0d2a3a 40%, #1a4a5c 70%, #0f3345 100%)',
      },
      boxShadow: {
        'gold': '0 0 30px rgba(201, 168, 76, 0.3)',
        'teal': '0 0 30px rgba(26, 74, 92, 0.5)',
        'card': '0 4px 24px rgba(0,0,0,0.12)',
        'card-hover': '0 12px 48px rgba(0,0,0,0.2)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
