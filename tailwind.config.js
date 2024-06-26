const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'carousel1': "url('/img/carousel1.webp')",
        'carousel2': "url('/img/carousel2.jpg')",
        'carousel3': "url('/img/carousel3.jpg')",
        
      }
    }
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
