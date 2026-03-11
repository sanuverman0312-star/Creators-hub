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
        primary: "#8B5CF6",
        accent: "#A78BFA",
        background: "#F7F5FF",
        card: "#FFFFFF",
        textDark: "#1F2937",
      },
      boxShadow: {
        glow: "0 0 20px rgba(139,92,246,0.3)",
        card: "0 10px 30px rgba(139,92,246,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;