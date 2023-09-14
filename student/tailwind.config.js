/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans serif'],
      body: ['Open Sans', 'sans serif']
    },
    extend: {
      colors: {
        primary: "#0095f3",

        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',   

        'main-blue-bg': '#0095f3',
        'main-light-bg': '#ffffff',
        
        'main-dark-bg': '#20232A',                                                          
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',  
        'half-transparent': 'rgba(0, 0, 0, 0.5)'
      },
      // borderWidth: {
      //   1: '1px'
      // },
      // borderColor: {
      //   color: 'rgba(0, 0, 0, 0.1)',
      // },
      width: {
        300: '300px',
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('/student/src/assets/hero-bg.svg')",
          // "url('')",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

