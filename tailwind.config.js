/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      minHeight: {
        0: "0",
        "1/4": "25vh",
        "1/2": "50vh",
        "3/4": "75vh",
        full: "100vh",
      },
      flex: {
        1.4: "0 0 1.5rem",
      },
    },
  },
};
