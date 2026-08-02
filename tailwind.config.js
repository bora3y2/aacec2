/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: '#068bad',
            50: '#eaf7fb',
            100: '#d0eef6',
            200: '#a3def0',
            300: '#6ec9e7',
            400: '#38b0db',
            500: '#068bad',
            600: '#057d99',
            700: '#04667f',
            800: '#035466',
            900: '#02434f',
            950: '#012a33',
          },
          green: {
            DEFAULT: '#409727',
            50: '#edf8e9',
            100: '#d7eed0',
            200: '#b0dda0',
            300: '#82c569',
            400: '#5dad42',
            500: '#409727',
            600: '#348020',
            700: '#29651b',
            800: '#1f4d15',
            900: '#16360f',
            950: '#0c1d08',
          },
        },
        navy: {
          DEFAULT: '#0a1f2c',
          50: '#f0f4f7',
          100: '#d9e2e9',
          200: '#b3c5d3',
          300: '#7d9bb0',
          400: '#4a6f87',
          500: '#2a4d63',
          600: '#1c3a4d',
          700: '#142d3d',
          800: '#0f2430',
          900: '#0a1f2c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
