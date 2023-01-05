/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          ".card__hover-bg:hover": {
            " background":
              "-webkit-linear-gradient(90deg, rgba(29, 158, 137, 1) 0%, rgba(25, 98, 120, 1) 100%)",
            " background":
              "linear-gradient(90deg, rgba(29, 158, 137, 1) 0%, rgba(25, 98, 120, 1) 100%)",
            color: "white",
          },
        },
      },
    ],
  },
};
