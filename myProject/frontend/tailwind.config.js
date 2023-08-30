/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({

  content : [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./src/pages/assets/homeAssets/Carousel.jsx"
  // "./src/Components/NavBar.jsx",
  // "./src/Components/Footer.jsx",

  // "./src/pages/Home.jsx",
  ],
  theme : {
  extend: {
    spacing:{
      
    }
  },
  },
  plugins : [],
});
