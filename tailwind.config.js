/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './src/pages/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {},
    },
    daisyui: {
        themes: [
          {
            mytheme: {
            "primary": "#C53C80",
            "secondary": "#EE583F",
            "accent": "#0464D4",
            "neutral": "#1E1B15",  
            "base-100": "#F8F8F7",  
            "info": "#9CA3F9",   
            "success": "#065f46",  
            "warning": "#fb923c",
            "error": "#9f1239",
            },
          },
        ],
      },
    plugins: [require('daisyui')],
  }