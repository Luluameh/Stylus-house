/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textbody: "#1D2547",
        maincolor: "#9F78FF",
        popular: "rgba(29, 37, 71, 0.5)",
        success: "#17BF63",
        error: "#E0245E",
        warning: "#F97316",
        info: "#3ABFF8",
      },
    },
  },
  plugins: [],
};

