/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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