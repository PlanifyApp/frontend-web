// tailwind.config.js
module.exports = {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        primary: "#0197DB",
        secondary: "#6B737C",
        label: "#6B737C",
        "text-gray": "#6C6B76",
        bg: "#000000",
        // tertiary: "#012942",
        "gray-texts": "#EAECF0",
        "gray-dark": "#6B737C",
        "gray-light": "#E2E2E2",
        redtrigger: "#FFDFDF",
        redbordertrigger: "#EA0000",
        "red-button": "#C80000",
        "gray-sky": "#EAECF0",
        "blue-fondo": "#F2FDF1",
        "blue-light": "#F5F7FB",
        background: "#F8F8F8",
        "blue-lighter": "#E0F3FE",
        blue: "#012942",
        "orange-button": "#0197DB",
        rosa: "#FDE5E5",
        "border-gray": "#A5B1BF",
        "modal-blue-main-title": "#0A1B48",
        "modal-grey-subtitle": "#6B737C",
        "modal-subtitle-description": "#2C3948",
        "modal-input": "#2C3948",
        "modal-black-button": "#2C3948",
        "bgopacity":"rgb(1, 121, 219, 0.2)",

      },
    },
    maxWidth: {
      '85vw': '85vw'
    },
  },
  plugins: [],
};

