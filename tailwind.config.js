/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily : {
        galada : "'Galada', cursive",
        grand : "'Grand Hotel', cursive",
        itim : "'Itim', cursive",
        mooli : "'Mooli', sans-serif",
        script : "Style Script', cursive",

      }
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui"),  require('flowbite/plugin')],
}

