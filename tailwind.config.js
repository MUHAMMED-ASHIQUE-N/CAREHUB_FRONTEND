/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["PT Serif", "serif"],
        arimo: ["Arimo", "sans-serif"],
        reem: ["Reem Kufi", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        viga: ["Viga", "sans-serif"],
      },
      colors: {
        primaryColor: "#1A76D1",
        buttonColor: "#009DE6",
      },
    },
  },
  plugins: [],
};