/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "spec-dark": "#0A0A0A",
        "spec-light": "#fff",
        "spec-orange": "#ff5200",
      },
      fontFamily: {
        "spec-title": "Manrope",
        "spec-body": "Darker Grotesque",
      },
    },
  },
  plugins: [],
};
