/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'widescreen':{'raw':'(min-aspect-ratio: 3/2)'},
        'tallscreen':{'raw':'(max-aspect-ratio: 13/20)'},

      },
      spacing:{
        '130' : '60rem',
        '120' : '40rem',
        '100': '35rem',
        '110': '45rem',
        '140': '30rem',
        
      },
    },
  },
  plugins: [],
}
