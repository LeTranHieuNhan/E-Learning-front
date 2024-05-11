/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";
const flowbite = require("flowbite-react/tailwind");

export default withMT ({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"

  ,flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"], // Adding Sora font
        sans: ["Public Sans", "sans-serif"], // Adding Public Sans as default sans-serif font
      },
      colors: {
        "purple-violet": "#7B48CCFF", // Custom color
        "blue-indigo": "#6E75D1FF", // Custom color
        "secondary-500": "#FE763EFF",
        "neutral-600" : "#565E6CFF",
        "tertiary3-500" :"#7B48CCFF",
        "primary-100" :"#F3F4FBFF",
        "orange-500" :" #FE763EFF",
       },
    },
  },
  plugins: [    flowbite.plugin(),
  ],
});
