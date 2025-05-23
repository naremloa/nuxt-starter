// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
  typescript: { typeCheck: true, strict: true },
  eslint: { config: { standalone: false } },
})
