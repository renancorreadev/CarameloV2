/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        atopic: ['atopic', 'sans-serif'],
      },
      colors: {
        brand: '#000', 
      },
      textShadow: {
        text: '0px 0px 10px rgba(255,255,255,0.3)',
      },
    },
  },
  plugins: [],
}
