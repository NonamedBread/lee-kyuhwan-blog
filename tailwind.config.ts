import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        customRed: {
          100: '#fff1f0',
          200: '#ffccc7',
          300: '#ffa39e',
          400: '#ff7875',
          500: '#ff4d4f',
          600: '#f5222d',
          700: '#cf1322',
          800: '#a80711',
          900: '#820014',
        },
        customGreen: {
          100: '#f6ffed',
          200: '#d9f7be',
          300: '#b7eb8f',
          400: '#95de64',
          500: '#73d13d',
          600: '#52c41a',
          700: '#389e0d',
          800: '#237804',
          900: '#135200',
        },

        customGreay: {
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        customBlue: {
          100: '#e6f7ff',
          200: '#bae7ff',
          300: '#91d5ff',
          400: '#69c0ff',
          500: '#40a9ff',
          600: '#1890ff',
          700: '#0d80ff',
          800: '#0050b3',
          900: '#003366',
        },
      },
      clipPath: {
        tap: 'polygon(17% 5%, 83% 5%, 97% 100%, 3% 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
