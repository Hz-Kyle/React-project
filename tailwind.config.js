/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '1271': '1271px',
        '580' : '580px',
        '500' : '500px',
        '1010' : '1010px',
        '300' : '300px',
      },

      height:{
        '394' : '394px',
         '190' : '190px',
         '445' : '445px',
      },
      
      fontFamily: {
        'muli':['Mulish','san-serif'],
        'robotoSlap' : ['Roboto Slab','san-serif'],
        'stardos' : ['Stardos Stencil','san-serif'],
        'inter' : ['Inter','san-serif'],


      },
      colors : {
        'primary' : '#0C31F3',
        'warning' : '#F4DD0F',
        'success' : '#25AC0F',
        'blood' : '#e71b18'
      }
      
    },
  },
  plugins: [],
}
