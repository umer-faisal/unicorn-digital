/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#201B18",
          dark: "#15110F",
          light: "#3A322D",
          soft: "#8E7D71",
        },
        neutral: {
          base: "#ffffff",
          muted: "#f6f6f6",
        },
        text: {
          base: "#1a1a1a",
          muted: "#6b6b6b",
        },
      },
    },
  },
  plugins: [],
}

