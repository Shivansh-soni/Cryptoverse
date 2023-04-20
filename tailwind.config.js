/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a66bfd",

          secondary: "#d5c2f2",

          accent: "#271c3f",

          neutral: "#1E293B",

          "base-100": "#FFFFFF",

          info: "#0CA5E9",

          success: "#2DD4BF",

          warning: "#F4BF50",

          error: "#FB7085",
        },
      },
    ],
  },
};
