/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',      
        secondary: '#7c3aed',   
        accent: '#a78bfa',      
        danger: '#f43f5e',       
        background: '#f5f3ff',   
        
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
