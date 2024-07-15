/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      xxs: "375px",
      xs: "425px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1310px",
    },

    container: {
      center: true,
    },

    extend: {
      colors: {
        black: "#212529",
        yellow: "#F8D000",
      },

      boxShadow: {
        button: "0 1px 5px 0 rgba(0, 0, 0, .15)",
        card: "0 .125rem .375rem rgba(0,0,0,.05),0 .5rem 1.2rem rgba(0,0,0,.1)"
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
