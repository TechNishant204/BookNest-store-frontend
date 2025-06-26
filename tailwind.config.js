/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1", // Indigo-500
        secondary: "#06B6D4", // Cyan-500
        accent: "#F59E42", // Orange-400
        background: "#F9FAFB", // Gray-50
        surface: "#FFFFFF", // White
        error: "#EF4444", // Red-500
        success: "#22C55E", // Green-500
        warning: "#FACC15", // Yellow-400
        info: "#3B82F6", // Blue-500
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
