/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      'white': '#ffffff',
      'black': '#000000',
      'gray': {
        '50': '#f9fafb',
        '100': '#f4f5f7',
        '200': '#e5e7eb',
        '300': '#d2d6dc',
        '400': '#9fa6b2',
        '500': '#6b7280',
        '600': '#4b5563',
      },
      'red': {
        '50': '#fdf2f2',
        '100': '#fde8e8',
        '200': '#fbd5d5',
        '300': '#f8b4b4',
        '400': '#f98080',
        '500': '#f05252',
        '600': '#e02424',
        '700': '#c81e1e',
        '800': '#9b1c1c',
        '900': '#771d1d',
      },
    },

    extend: {},
  },
  plugins: [],
}
