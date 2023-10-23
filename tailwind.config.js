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

      },
      backgroundImage : {
        'navBg': "url(/../src/assets/nav.png)",
        'bannerBg': "url(/../src/assets/bannner2.jpg)",
        'detailBg': "url(/../src/assets/back5.jpg)",
        'errorBg': "url(/../src/assets/error.jpg)",
        'chooseBg': "url(/../src/assets/back.jpg)",
        'signBg': "url(/../src/assets/back6.jpg)",
        'updateBg': "url(/../src/assets/back1.jpg)",
        'productCartBg': "url(/../src/assets/back5.jpg)",
        'productBg': "url(/../src/assets/back11.avif)",
        'serviceBg': "url(/../src/assets/back10.avif)",
        'brandBg': "url(/../src/assets/back7.avif)",
        'addCarBg': "url(/../src/assets/back8.avif)",
      }
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui"),  require('flowbite/plugin')],
}
