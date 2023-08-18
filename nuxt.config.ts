// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@vueuse/nuxt",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
  },
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    highlight: {
      theme: "dracula-soft",
    },
  },
  imports: {
    dirs: ["composables/**", "utils/**", "types", "stores"],
  },
})
