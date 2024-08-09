/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "var(--primary-bg-color)",
        secondaryBg: "var(--secondary-bg-color)",
        primaryCta: "var(--primary-cta-color)",
        // primaryText: "var(--primary-text-color)",
        // secondaryBg2: "var(--secondary-bg-color-2)",
        // disabledColor: 'var(--disabled-gold-color)'
      },
    },
  },
  plugins: [],
};
