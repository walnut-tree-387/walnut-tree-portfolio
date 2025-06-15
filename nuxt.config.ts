export default defineNuxtConfig({
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/cloudinary'
  ],
  compatibilityDate : '2025-06-15',
cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  },
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
  }
})