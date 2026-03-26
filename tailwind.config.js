/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00BCD4",
        secondary: "#0288D1",
        accent: "#FF6B35",
        dark: "#0D1B2A",
        darker: "#010409",
        light: "#F5F5F5",
        lightBg: "#FAFAFA",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: ["Poppins", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
        slideIn: "slideIn 0.5s ease-in-out",
        slideUp: "slideUp 0.6s ease-out",
        bounce: "bounce 1s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0, 188, 212, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 188, 212, 0.8)" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0, 188, 212, 0.5)",
        "glow-cyan-lg": "0 0 30px rgba(0, 188, 212, 0.7)",
      },
    },
  },
  plugins: [],
};
