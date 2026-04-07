import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: '#09090b',
          raised: '#0c0c0f',
          card: '#111114',
          border: 'rgba(255,255,255,0.06)',
        },
      },
      boxShadow: {
        card: '0 0 0 1px rgba(255,255,255,0.06), 0 12px 40px rgba(0,0,0,0.45)',
        'card-hover':
          '0 0 0 1px rgba(255,255,255,0.1), 0 20px 50px rgba(0,0,0,0.55)',
      },
    },
  },
  plugins: [],
};

export default config;
