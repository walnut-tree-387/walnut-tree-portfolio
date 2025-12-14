import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        darkbg: '#0f172a'
      },
      fontFamily: {
        primary: ['"Playfair Display"', 'serif'],
        secondary: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    }
  }
}
export default config