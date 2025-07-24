// tailwind.config.js
module.exports = {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        primary: "#007DC3",
        secondary: "#464646",
        'secondary-active' : "#4646461A",
        tertiary: "#F1632A",
        'primary-hover': "#007DC378",
        'dark-blue': "#0169A4",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

