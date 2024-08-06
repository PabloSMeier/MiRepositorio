import type { Config } from "tailwindcss";

const config: Config = {
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
      fontFamily: {
        yk: ["Quicksand"],
      },
      colors: {
        bg: "#DDDDDD",
        primary: "#001f3f",
        primaryB: "#0074D9",
        accent: "#FFDC00",
        accent2: "#FF851B",
      },
    },
  },
  plugins: [],
};
export default config;
