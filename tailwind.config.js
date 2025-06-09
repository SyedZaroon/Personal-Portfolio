/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xsm: "320px",
        // => @media (min-width: 640px) { ... }

        sm: "375px",
        // => @media (min-width: 768px) { ... }

        md: "425px",

        lg: "768px",
        // => @media (min-width: 1024px) { ... }

        xl: "1024px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1536px) { ... }
      },

      colors: {
        primary: "#F59E0B",
        primary_dark: "#D97706",
        primary_400: "#FBBF24",
        primary_100: "#FDF1DB",
        light_bg: "#FEFAF3",
        gray_bg: "#F9FAFB",
        secondary: "#0F172A",
        dark_bg: "#1A1E29",
        dark_600: "#161C2D",
        dark_500: "#192132",
        dark_200: "#302B26",
        dark_100: "#1E293B",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
