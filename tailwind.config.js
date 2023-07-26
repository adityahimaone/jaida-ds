/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#51459E",
  ["primary-gray"]: "#9698AB",
};

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fill: {
        ...colors,
      },
    },
  },
  plugins: [],
};
