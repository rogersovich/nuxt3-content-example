import type { Config } from "tailwindcss"
import tailwindTypography from "@tailwindcss/typography"

export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#10b981",
          50: "#e2f7f0",
          100: "#b7ead9",
          200: "#88dcc0",
          300: "#58cea7",
          400: "#34c494",
          500: "#10b981",
          600: "#0eb279",
          700: "#0caa6e",
          800: "#09a264",
          900: "#059351",
        },
      },
    },
  },
  plugins: [tailwindTypography],
}
