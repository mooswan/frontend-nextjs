
import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '100px',
      'xm': '500px',
      'sm': '640px',
      'md': '768px',
      'mds': '1000px',
      'mdm': '1003px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2050px',
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config

