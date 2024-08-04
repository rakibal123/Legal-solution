/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage:{
      'custom-image':"url('./images/banner.png')"
    },
    colors:{
      customBrown:'#A97D52',
    },
  },
  },
  plugins: [],
}

