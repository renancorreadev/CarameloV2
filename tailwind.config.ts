import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        atopic: ['Atopic', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: '#000', 
      },
      textShadow: {
        text: '0px 0px 10px rgba(255,255,255,0.3)',
      },
      fontSize: {
        'hero': '10rem',
        'hero-md': '8rem',
        'hero-lg': '12rem',
      },
    },
  },
  plugins: [],
}
export default config
