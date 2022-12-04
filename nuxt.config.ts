export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      meta: [{ name: 'description', content: 'My amazing app' }],
    },
  },
});
