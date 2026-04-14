// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "sos3tlxk",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-03-31",
  },
  css: ["~/assets/css/main.css"],
  nitro: {
    preset: "github-pages",
  },
  app: {
    baseURL: "/",
    head: {
      title: "Alevitisch Culturele Vereniging Zaanstad",
      meta: [
        {
          name: "description",
          content:
            "Welkom bij het Alevitisch Culturele Vereniging Zaanstad (Cemhuis Zaanstad).",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },
});
