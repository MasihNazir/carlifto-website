/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-img': "url('../public/headerbg.jpg')",
        'section-img': "url('../public/section.png')",
        'bg-img': "url('../public/bg.png')",
      },
      fontFamily: {
        noto: ['var(--font-noto)'],
        mono: ['var(--font-roboto-mono)'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
};
