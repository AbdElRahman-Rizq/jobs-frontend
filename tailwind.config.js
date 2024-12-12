/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "light-gray": "rgb(86, 125, 139)",
        "dark-gray": "#314851",
        "light-green": "#4AD6AB",
        "dark-red": "rgb(196, 58, 73)",
        "secondary-color": "#567d8b",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
