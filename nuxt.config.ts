// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-09-18",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Vueast",
      meta: [
        {
          name: "description",
          content: "Explore the latest version of Vue AST structure, focusing on templates.",
        },
      ],
    },
  },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/fonts"],
  shadcn: {
    prefix: "V",
    componentDir: "./app/components/ui",
  },
});
