import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import lineClamp from "@tailwindcss/line-clamp";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // canonical kebab-case keys
        'brain-dump-gray': '#D3D3D3',
        'stark-black': '#1A1A1A',
        'concrete-white': '#F8F8F8',
        'muted-rust': '#A8573D',
        'deep-slate': '#4A4A4A',
        // aliases to match existing camelCase usage in code
        brainDumpGray: '#D3D3D3',
        starkBlack: '#1A1A1A',
        concreteWhite: '#F8F8F8',
        mutedRust: '#A8573D',
        deepSlate: '#4A4A4A',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
        // convenient aliases used across components
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-open-sans)', 'sans-serif'],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [typography, lineClamp],
};

export default config;
