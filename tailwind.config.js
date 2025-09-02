/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#6366f1",
      },
      gradientColorStops: {
        'gradient-1': '#0ea5e9',
        'gradient-2': '#6366f1',
      },
    },
  },
  plugins: [],
}

