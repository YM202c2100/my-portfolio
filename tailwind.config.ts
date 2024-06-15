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
        appear: 'appear 1s ease-in alternate',
        shift: 'shift 1s linear 2 alternate',
        glitch1: "glitch1 1s 2 alternate",
        glitch2: "glitch2 1s 2",
        glitch3: "glitch3 1s 2",
        glitch4: "glitch4 1s 2",
        glitch4r: "glitch4 1s 2 reverse",
        glitchChildren: "glitch1 1s 2 alternate, appear 1s ease-in"
      },
      keyframes: {
        appear:{
          "0%":{filter: "blur(4px)", opacity:"0.3"},
          "100%":{filter:"blur(0)", opacity:"1"}
        },

        shift: {
          '0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100%': { transform: 'skewX(0deg) skewY(0deg)' },
          '41%': { transform: 'skewX(10deg)' },
          '42%': { transform: 'skewX(-10deg)' },
          '59%': { transform: 'skewX(40deg) skewY(10deg)' },
          '60%': { transform: 'skewX(-40deg) skewY(-10deg)' },
          '63%': { transform: 'skewX(10deg) skewY(-5deg)' },
          '70%': { transform: 'skewX(-50deg) skewY(-20deg)' },
          '71%': { transform: 'skewX(10deg) skewY(-10deg)' },
        },

        glitch1: {
          '0%, 20%, 33%, 100%': { transform: 'skewX(0deg) skewY(0deg)' },
          '21%, 23%': { transform: 'skewX(20deg)' },
          '24%, 26%': { transform: 'skewX(-20deg)' },
          '27%, 29%': { transform: 'skewX(10deg) skewY(3deg)' },
          '30%, 32%': { transform: 'skewX(-10deg) skewY(-5deg)' },
        },
        
        glitch2: {
          '0%, 60%, 64%, 78%, 81%, 86%, 89%, 93%, 100%': { transform: 'skewX(0deg) skewY(0deg)' },
          '61%': { transform: 'skewY(-15deg)' },
          '62%': { transform: 'skewY(15deg)' },
          '79%': { transform: 'skewX(-30deg) skewY(-20deg)' },
          '80%': { transform: 'skewX(20deg) skewY(20deg)' },
          '85%': { transform: 'skewX(20deg) skewY(20deg)' },
          '90%': { transform: 'skewX(40deg) skewY(30deg)' },
          '91%': { transform: 'skewX(20deg) skewY(-20deg)' },
        },
        
        glitch3: {
          '0%, 60%, 64%, 78%, 81%, 86%, 89%, 93%, 100%': { transform: 'skewX(0deg) skewY(0deg) translate(0px, 0px)' },
          '61%': { transform: 'skewX(5deg) translate(-10px, -10px)' },
          '62%': { transform: 'skewX(-5deg) translate(-10px, -10px)' },
          '79%': { transform: 'skewX(30deg) skewY(20deg)' },
          '80%': { transform: 'skewX(-10deg) skewY(-10deg)  translate(20px, 20px)' },
          '85%': { transform: 'skewX(-10deg) skewY(-10deg)  translate(20px, 20px)' },
          '90%': { transform: 'skewX(-10deg) skewY(-20deg)' },
          '91%': { transform: 'skewX(-40deg) skewY(10deg)' },
        },

        glitch4: {
          '0%, 20%, 24%, 38%, 41%, 46%, 49%, 53%, 100%': { transform: 'skewX(0deg) skewY(0deg)' },
          '21%': { transform: 'skewX(-15deg)' },
          '22%': { transform: 'skewX(15deg)' },
          '39%': { transform: 'skewX(-30deg) skewY(-20deg)' },
          '40%': { transform: 'skewX(50deg) skewY(20deg)' },
          '45%': { transform: 'skewX(50deg) skewY(20deg)' },
          '50%': { transform: 'skewX(40deg) skewY(30deg)' },
          '51%': { transform: 'skewX(-20deg) skewY(20deg)' },
        }
        
        
        
      },
    },
  },
  plugins: [],
};
export default config;
