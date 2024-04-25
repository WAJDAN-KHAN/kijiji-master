/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#373373",
      },
      screens: {
        "custom-sm": "400px",
        "custom-lg": "1150px",
        "custom-md": "980px",
        "custom-ml": "880px",
      },
    },
  },
  plugins: [],
};
