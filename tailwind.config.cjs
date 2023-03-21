/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#0883c5",
      white: "#fff",
      "transparent": "transparent",
      "text-color": "#515151",
      "sub-text-color": "#9ba0ab",
      "border-color": "#e6e6e9",
      "skill-bg": "#edf0f5",
      black: "#000",
    },
    extend: {
      borderWidth: {
        '10': '10px',
        '12': '12px',
      },
    },
  },
  plugins: [],
}
