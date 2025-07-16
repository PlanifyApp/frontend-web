// tailwind.config.js
module.exports = {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        primary: "#007DC3",
        secondary: "#464646",
        tertiary: "#F1632A",
      },
    },
    maxWidth: {
      '85vw': '85vw'
    },
  },
  plugins: [],
};

