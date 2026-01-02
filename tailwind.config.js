/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // blue
        secondary: "#16a34a", // green
        dark: "#0f172a",      // black-ish
      },
    },
  },
  plugins: [],
};
