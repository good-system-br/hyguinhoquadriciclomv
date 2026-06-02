import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        forest: {
          950: '#0e1e0e',
          900: '#162a16',
          800: '#1e3c1e',
          700: '#264826',
          600: '#2D5A2D',
          500: '#3D7A3D',
          400: '#5A9A5A',
          300: '#7BBD7B',
          200: '#A8D9A8',
          100: '#D4EED4',
          50: '#EEF9EE',
        },
        moss: '#6DB33F',
        'moss-dark': '#558A2F',
        sand: '#F5F1E8',
        stone: '#E8E3D8',
      },
    },
  },
  plugins: [],
};

export default config;
