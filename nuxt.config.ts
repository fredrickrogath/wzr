// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  modules: [ '@element-plus/nuxt', '@vueuse/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt'],  elementPlus: { /** Options */ },
  plugins: ['~/plugins/gsap'],
  // app: {
  //   head: {
  //     link: [
  //       {
  //         rel: "stylesheet",
  //         href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
  //       },
  //     ],
  //   }
  // }
})
