/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "var(--color-soft-orange)",
        red: "var(--color-soft-red)",
        "off-white":"var(--color-off-white)",
        grayish: "var(--color-grayish-blue)",
        "dark-grayish": "var(--color-dark-grayish-blue)",
        "dark-blue": "var(--color-very-dark-blue)"
      },
      backgroundImage:{
        "hero-desk":"url('./assets/images/image-web-3-desktop.jpg')",
        "hero-mob":"url('./assets/images/image-web-3-mobile.jpg')",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}