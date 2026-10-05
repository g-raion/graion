/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07110F',
          900: '#0D1B18',
          800: '#132A25',
        },
        cyan: {
          glow: '#2DE2C5',
          neon: '#11BFA7',
        },
        red: {
          glow: '#FF6B4A',
          neon: '#FF9A5A',
        },
        warm: '#FFE2B8',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'equalize': 'equalize 0.8s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
        'grain': 'grain 0.5s steps(2) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scrollHint: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(12px)', opacity: '0' },
        },
        equalize: {
          '0%': { height: '20%' },
          '100%': { height: '100%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        grain: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-5px,5px)' },
          '100%': { transform: 'translate(5px,-5px)' },
        },
      },
    },
  },
  plugins: [],
};
