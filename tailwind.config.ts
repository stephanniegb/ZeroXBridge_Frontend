import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-bg': 'rgba(9, 5, 14, 1)',
        'white-style': 'rgba(139, 139, 139, 1)',
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(90deg, rgba(38, 24, 62, 1) 0%, rgba(162, 109, 255, 1) 50%, rgba(38, 24, 62, 1) 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(162, 109, 255, 0.25), rgba(72, 61, 139, 0.5))',
        'grid-pattern': "url('/grid-background.svg'), linear-gradient(21deg, #09050E 64.15%, #462B74 129.88%)",
        'grid-pattern-2': "url('/grid-background.svg'), linear-gradient(294deg, #09050E 55.15%, #462B74 129.88%)",
        'back-g': "url('/background.svg')",
      },
      boxShadow: {
        'custom-purple': '0 0 4px 2px rgba(162, 109, 255, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
