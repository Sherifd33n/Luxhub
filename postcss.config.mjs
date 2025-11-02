const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      colors: {
        base: "var(--color-base)",
        small_text: "var(--color-small_text)",
        button_brown: "var(--color-button_brown)",
        header_bg: "var(--color-header_bg)",
        white_text: "var(--color-white_text)",
        light_color: "var(--color-lightColor)"
      },
    },
  },
};

export default config;
