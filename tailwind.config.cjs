/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        Inter: ['"Inter"']
      }
    },
  },
  daisyui: {
    themes: ["sunset", "dracula", "pastel", "nord", "cupcake"],
  },

  plugins: [require("daisyui")],
};

module.exports = config;
