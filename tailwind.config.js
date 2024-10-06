/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2.5rem",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#12715b",
          hover: "#0f604d",
          active: "red",
          new: "green",
        },
        secondery: {
          DEFAULT: "#212529",
          hover: "yellow",
        },
      },
    },
  },
  plugins: [],
};
