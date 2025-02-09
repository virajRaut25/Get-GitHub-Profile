/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        typing: "typing 3s steps(30, end) infinite alternate, blink 0.8s infinite",
      },
      keyframes: {
        typing: {
          '0%': { width: "0" },
          '100%': {width: '100%'}
        },
        blink: {
          "50%": { borderColer: "transparent" },
        },
      },
    },
  },
  plugins: [],
};
