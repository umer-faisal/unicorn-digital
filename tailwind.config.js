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
        // Tayr Digital Color Scheme
        brand: {
          // Blue - Primary Services
          primary: "#2563eb", // Blue-600
          dark: "#1e40af", // Blue-800
          light: "#3b82f6", // Blue-500
          soft: "#60a5fa", // Blue-400
        },
        // Green - Digital Marketing & Case Studies
        green: {
          primary: "#10b981", // Green-500
          dark: "#059669", // Green-600
          light: "#34d399", // Green-400
        },
        // Orange - AI Services
        orange: {
          primary: "#f97316", // Orange-500
          dark: "#ea580c", // Orange-600
          light: "#fb923c", // Orange-400
        },
        // Purple - Resources
        purple: {
          primary: "#a855f7", // Purple-500
          dark: "#9333ea", // Purple-600
          light: "#c084fc", // Purple-400
        },
        // Grey - About/Contact/Legal
        grey: {
          primary: "#6b7280", // Grey-500
          dark: "#4b5563", // Grey-600
          light: "#9ca3af", // Grey-400
        },
        neutral: {
          base: "#ffffff",
          muted: "#f6f6f6",
          dark: "#1f2937",
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

