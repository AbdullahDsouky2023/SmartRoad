/** @type {import('tailwindcss').Config} */
module.exports = {
    
      content: ["./app/**/*.{js,ts,tsx}",
         "./components/**/*.{js,ts,tsx}",
         "./screens/**/*.{js,ts,tsx}"],
    
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
          'primary':'#2664ED',
          'black':'#000000',
          'white':'#ffffff',
          'red':'#BA1735',
          'green':'#1ACC72',
          'grayIcon':'rgba(0,0,0,0.2)',
          'Black100':'rgba(0,0,0,1)',
          'Black70':'rgba(0,0,0,0.7)',
          'Black40':'rgba(0,0,0,0.4)',
          'Black20':'rgba(0,0,0,0.2)',
          'Card':'#EFEFF4',
          'white100':'rgba(255,255,255,1)',
          'white70':'rgba(255,255,255,0.7)',
          'white40':'rgba(255,255,255,0.4)',
          'white20':'rgba(255,255,255,0.2)',
          'Background':'#000000',
          'Surface':'#ffffff',
          'mainFont':'BeVietnam',
      },
      },
    },
    plugins: [],
  }
