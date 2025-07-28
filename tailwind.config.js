export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#242424",
      grey: "#F3F3F3",
      "dark-grey": "#6B6B6B",
      red: "#FF4E4E",
      transparent: "transparent",
      twitter: "#1DA1F2",
      purple: "#8B46FF",
      green: "#b4e7ad",
      "yellow-500": "#facc15",

      // 🌿 Màu nền xanh lá thiên nhiên
      "green-bg": "#e6f4ea",        // Màu nền chính (body)
      "green-header": "#a8d5ba",    // Header, navbar
      "green-light": "#c6e6d6",     // Button nhẹ
      "green-hover": "#a8d5ba",     // Hover button
      "green-soft": "#dff2e6",      // Input box background
      "green-sidebar": "#d0ead7",   // Sidebar, section nổi
      "green-border": "#a8d5ba",    // Border xanh
      "green-tag": "#cdebdc",       // Tag nền
      "green-btn": "#93e692ff",     // Màu
    },

    fontSize: {
      sm: "12px",
      base: "14px",
      xl: "16px",
      "2xl": "20px",
      "3xl": "28px",
      "4xl": "38px",
      "5xl": "50px",
    },

    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
};
