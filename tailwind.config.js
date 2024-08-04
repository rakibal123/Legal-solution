/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage:{
      'custom-image':"url('./images/banner.png')",
       'second-image':"url('./images/slider-1.jpg')"
    },
    colors:{
      customBrown:'#A97D52',
    },
  },
  },
  plugins: [
    require('daisyui'),
  ],
}

