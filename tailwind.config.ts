import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["var(--font-logo)", "sans-serif"],
      },
      colors: {
        borderRed: "#8C1D0F", // Cor da borda do texto
      },
    },
  },
  plugins: [],
} satisfies Config;
