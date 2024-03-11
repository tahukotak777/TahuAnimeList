/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      main: {
        primary: "#eeeeee",
        neon: "#1F51FF",
        secondary: "#393e46",
        dark: "#222831",
      },
      sosmed: {
        instagram: "#C13584",
        twitter: "#1DA1F2",
        github: "#24292e",
        youtube: "#FF0000",
        jikan: "#191970"
      }
    },
  },
  plugins: [],
};
