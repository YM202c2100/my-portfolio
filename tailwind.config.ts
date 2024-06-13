import { transform } from "next/dist/build/swc";
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

      animation: {
        unstableAppearance: 'unstableAppearance 1s ease-in-out  alternate',
        appear: 'appear 1s ease-in-out  alternate',
        shift: 'shift 1s ease-in-out',
      },
      keyframes: {
        unstableAppearance: {
          '0%':{transform:'skewX(0deg) skewY(0deg)', filter:'blur(4px)',opacity:'0.3'},
          '40%, 44%, 58%,  65%, 69%, 73%, 80%': { transform: 'skewX(0deg) skewY(0deg)' },
          '41%': { transform: 'skewX(10deg)' },
          '42%': { transform: 'skewX(-10deg)' },
          '59%': { transform: 'skewX(40deg) skewY(10deg)' },
          '62%': { transform: 'skewX(40deg) skewY(10deg)' },
          '63%': { transform: 'skewX(-20deg) skewY(-10deg)' },
          '70%': { transform: 'skewX(-20deg) skewY(-20deg)' },
          '71%': { transform: 'skewX(10deg) skewY(-10deg)' },
          '100%': {transform: 'skewX(0deg) skewY(0deg)', filter:'blur(0)',opacity:'1'}
        },
        appear:{
          "0%":{filter: "blur(4px)", opacity:"0.3"},
          "100%":{filter:"blur(0)", opacity:"1"}
        },

        shift: {
          '0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100%': { transform: 'skewX(0deg)' },
          '41%': { transform: 'skewX(10deg)' },
          '42%': { transform: 'skewX(-10deg)' },
          '59%': { transform: 'skewX(40deg) skewY(10deg)' },
          '60%': { transform: 'skewX(-40deg) skewY(-10deg)' },
          '63%': { transform: 'skewX(10deg) skewY(-5deg)' },
          '70%': { transform: 'skewX(-50deg) skewY(-20deg)' },
          '71%': { transform: 'skewX(10deg) skewY(-10deg)' },
        },

      },
    },
  },
  plugins: [],
};
export default config;
