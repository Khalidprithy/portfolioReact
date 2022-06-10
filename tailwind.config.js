module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1f2937",

          "secondary": "#f87171",

          "accent": "#37CDBE",

          "neutral": "#9ca3af",

          "base-100": "#f3f4f6",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}