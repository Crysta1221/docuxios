// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/style.scss'],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width',
      title: 'Docuxios',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
      htmlAttrs: {
        lang: 'ja',
      },
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/google-fonts", "@nuxtjs/color-mode"],
  googleFonts: {
    families: {
      'Noto+Sans+JP': [400],
      'Source+Code+Pro': [400],
    }
  },
  tailwindcss: {
    cssPath: "~/assets/css/style.scss",
    configPath: 'tailwind.config.js',
  },
  plugins: ['~/plugins/preline.client.ts'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
  }
})