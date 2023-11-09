import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#10653A",
          900: "#1FA45B",
        },
        light: {
          900: "#F7F8FA",
        },
      },
    },
  },
  plugins: [],
};
export default config;
