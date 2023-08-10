/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#915EFF"
      },
      screens:{
        "2xl":"1600px"
      },
      keyframes:{
        zoomIn:{
          "0%":{transform:"translateY(-100px)",opacity:0},
          "100%":{transform:"translateY(0px)",opacity:1}
        }
      },
      animation:{
        zoomIn:"zoomIn 0.53s ease 1"
      }
    },
  },
  plugins: [],
}