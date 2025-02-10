/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'app-bg': 'var(--background)',
      },
      textColor: {
        'app-primary': 'var(--text-primary)',
        'app-secondary': 'var(--text-secondary)',
      },
      borderColor: {
        'app-border': 'var(--border-color)',
      }
    }
  },
  plugins: [],
}