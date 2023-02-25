/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f25783",

          "secondary": "#c9983e",

          "accent": "#7df2b6",

          "neutral": "#192129",

          "base-100": "#EEEFF1",

          "info": "#6E8CD4",

          "success": "#1BB6A4",

          "warning": "#F6CF41",

          "error": "#E43A5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
