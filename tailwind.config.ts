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
          950: '#1a3a1a',
          900: '#224822',
          800: '#2a5a2a',
          700: '#336633',
          600: '#3d7a3d',
          500: '#4e974e',
          400: '#6ab26a',
          300: '#8ecc8e',
          200: '#b8e0b8',
          100: '#dff0df',
          50: '#f2faf2',
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
