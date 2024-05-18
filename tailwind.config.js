/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        primaryShadow: "#f0f0f058 0px 20px 100px",
      },
      colors: {
        primary: "#3D758E",
        secondary: "#3D758E",
      },
      backgroundColor: {
        primary: "#3D758E",
      },
      textColor: {
        primary: "#3D758E",
        secondary: "#7D7B7B",
      },
      fontSize: {
        xs: ["0.9rem", "1.5rem"],
        sm: ["1rem", "1.5rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.5rem", "1.5rem"],
        xl: ["2.13rem", "2.5rem"],
        xxl: ["2.5rem", "2.5rem"],
        xxxl: ["4.3rem", "1.2"],
      },
      fontWeight: {
        thin: "100",
        hairline: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
};
