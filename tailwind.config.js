/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gaming: {
          primary: 'var(--gaming-primary, #00ff41)',
          secondary: 'var(--gaming-secondary, #ff0080)',
          accent: 'var(--gaming-accent, #00ffff)',
          bg: 'var(--gaming-bg, #0a0a0a)',
        }
      }
    },
  },
  plugins: [],
};
