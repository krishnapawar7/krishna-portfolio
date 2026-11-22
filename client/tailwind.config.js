/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Inter', 'sans-serif'],
        display: ['"Big Shoulders Display"', 'Space Grotesk', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        pixel: ['"Press Start 2P"', 'monospace'],
        retro: ['Silkscreen', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        }
      }
    },
  },
  plugins: [],
}
