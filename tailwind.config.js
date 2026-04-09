/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1E3A8A',
        'navy-dark': '#0F172A',
        'navy-mid': '#1E293B',
        cyan: '#0284C7',
        'cyan-light': '#38BDF8',
        steel: '#6B7A8D',
        danger: '#E84646',
        gold: '#D4A843',
        offwhite: '#F4F7FB',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        accent: ['Fraunces', 'serif'],
      },
      animation: {
        pulse2: 'pulse2 2s cubic-bezier(0.4,0,0.6,1) infinite',
        ripple: 'ripple 2s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        pulse2: {
          '0%,100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: 0.8 },
          '100%': { transform: 'scale(2.5)', opacity: 0 },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
