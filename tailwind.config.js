/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "meat-brown": "#EDB33C",
        cultured: "#F8F7F1",
        "yankees-blue": "#0D2F3F",
        "outer-space": "#2B383A",
        "myrtle-green": "#286F6C",
        "chinese-orange": "#F26440",
        "deep-space-sparkle": "#406765",
        "maize": "#EEC049",
      },
      backgroundImage: {
        'me': "url('/me.webp')",
      }
    },
  },
  plugins: [],
};
