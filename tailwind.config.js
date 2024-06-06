/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      maxWidth: {
        default: '800px'
      }
    },
  },
  plugins: [],
}

