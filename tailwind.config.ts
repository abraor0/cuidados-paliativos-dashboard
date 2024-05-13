import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "governor-bay": {
          "50": "#eef2ff",
          "100": "#e0e7ff",
          "200": "#c7d2fe",
          "300": "#a6b4fb",
          "400": "#828df7",
          "500": "#6467f0",
          "600": "#5047e4",
          "700": "#4b41cb",
          "800": "#3831a2",
          "900": "#322f80",
          "950": "#1e1b4b",
        },
        "accent-1": "#FFB149",
        "accent-2": "#75D2FF",
      },
    },
  },
  plugins: [],
};
export default config;
