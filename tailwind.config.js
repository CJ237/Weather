/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update with your template file extensions
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-10deg)' },
        '50%': { transform: 'rotate(10deg)' },
      },
    },
    skew: {
      '30': '30deg',
    }
  },
  },
  plugins: [],
}

