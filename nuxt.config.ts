// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  features: {
    devLogs: true
  },
  experimental: {
    headNext: true,
    typedPages: true,
    appManifest: true,
    sharedPrerenderData: true,
    scanPageMeta: 'after-resolve',
  },
  future: {
    compatibilityVersion: 4,
  },
  /*
    Изменение директории по умолчанию(./app) для клиентского кода
    srcDir: 'client_directory_name',
    dir: { app: 'client_directory_name' },
   */
  typescript: {
    strict: true
  },
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      htmlAttrs: { lang: 'ru' },
      meta: [
        {name: 'msapplication-TileColor', content: '#da532c'},
        {name: 'theme-color', content: '#ffffff'},
      ],
      link: [
        {rel: 'apple-touch-icon', sizes: '180x180', href: '\/apple-touch-icon.png'},
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: '\/favicon-32x32.png'},
        {rel: 'icon', type: 'image/png', sizes: '16x16', href: '\/favicon-16x16.png'},
        {rel: 'mask-icon', href: '\/safari-pinned-tab.svg', color: '#bf2920'},
        {rel: 'manifest', href: '\/site.webmanifest'},
      ],
      script: []
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    '~/assets/styles/variables.css'
  ],
  postcss: {
    plugins: {
      autoprefixer: {},
      'postcss-import': {},
      'postcss-nested': {},
      '@csstools/postcss-global-data': {
        files: ['./client/assets/styles/media-queries.css']
      },
      'postcss-preset-env': {
        stage: 2,
        features: {
          'nesting-rules': true,
          'custom-media-queries': true,
          'custom-selectors': true,
        },
      }
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
  plugins: [],
  modules: [
    '@pinia/nuxt',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    '@nuxt/devtools',
  ],
  vite: {
    plugins: [],
    build: {
      //cssMinify: 'lightningcss'
    },
  },
  nitro: {
    compressPublicAssets: true,
    storage: {
      cache: {
        driver: 'redis',
        host: 'redis',
        port: 6379,
        db: 1,
      },
    },
    routeRules: {},
  },
  build: {
    transpile: [],
  },
  fonts: {
    families: [
      { name: 'OpenSans', provider: 'google' },
    ],
    experimental: {
      processCSSVariables: true,
    }
  },
  scripts: {
    globals: {}
  },
})
