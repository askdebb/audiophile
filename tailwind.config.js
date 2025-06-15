import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        navbarText: 'var(--navbar-text-header-color)',
        primary: 'var(--primary-color)',
        hoverColor: 'var(--primary-color-hover)',
        cardColor: 'var(  --card-bg-color)',
        textColor: 'var(--text-color)',
      },
      borderRadius: {
        radius: 'var(--rounded-radius)',
      },
      fontSize: {
        h1: 'var(--text-h1)',
        h2: 'var(--text-h2)',
        h3: 'var(--text-h3)',
        h4: 'var(--text-h4)',
        h5: 'var(--text-h5)',
        h6: 'var(--text-h6)',
        overline: 'var(--text-overline)',
        subtitle: 'var(--text-subtitle)',
        body: 'var(--text-body)',
      },
      letterSpacing: {
        h1: 'var(--char-space-h1)',
        h2: 'var(--char-space-h2)',
        h3: 'var(--char-space-h3)',
        h4: 'var(--char-space-h4)',
        h5: 'var(--char-space-h5)',
        h6: 'var(--char-space-h6)',
        overline: 'var(--char-space-overline)',
        subtitle: 'var(--char-space-subtitle)',

        // etc.
      },
      lineHeight: {
        h1: 'var(--line-space-h1)',
        h2: 'var(--line-space-h2)',
        h3: 'var(--line-space-h3)',
        h4: 'var(--line-space-h4)',
        h5: 'var(--line-space-h5)',
        h6: 'var(--line-space-h6)',
        overline: 'var(--line-space-overline)',
        subtitle: 'var(--line-space-subtitle)',
        body: 'var(--line-space-body)',

        // etc.
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2.5rem',
        },
        screens: {
          sm: '640px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1400px',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

module.exports = config;
