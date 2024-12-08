import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "var(--primaryColor)",
        secondaryColor: "var(--secondaryColor)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"], // Poppins for headings
        body: ["var(--font-body)"], // Raleway for body
        logo: ["var(--font-logo)"],
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(to top, #FF9C1A, #ED250A)",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
function ({ addUtilities }: any) {   
      addUtilities({
        ".text-gradient": {
          backgroundImage: "linear-gradient(to top, #FF9C1A, #ED250A)", // Gradient from orange to red
          backgroundClip: "text", // Clips the background to the text
          WebkitBackgroundClip: "text", // For Safari
          color: "transparent", // Makes the text transparent
        },
      });
    },
  ],
};
export default config;