/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "../src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",  // ক্লাস বেজড ডার্ক মোড
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};



