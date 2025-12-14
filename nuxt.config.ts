export default defineNuxtConfig({
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'v-gsap-nuxt',
    '@nuxtjs/google-fonts',
  ],
  compatibilityDate : '2025-06-15',
  css: ['~/assets/css/tailwind.css'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode'
  },
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    viewer: false 
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  vgsap: {
    composable: true,
    breakpoint: 768,
    scroller: ''
  },
  googleFonts: {
    families: {
      'Playfair Display': {
        wght: [400, 500, 600],
      }
    },
    display: 'swap',
    preload: true,
  },
})