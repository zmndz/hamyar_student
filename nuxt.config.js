import userAuth from "./middleware/userAuth";

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'وی‌فایند | موتور جستجوی سوالات امتحانی',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/style.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/interceptor', mode: 'client' },
    { src: '@/plugins/vue-text-highlight' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/pwa',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    ['vue-scrollto/nuxt', { duration: 500 }],

  ],
  pwa: {
    workbox: {
      // enabled: false,
    },
    manifest: {
      name: 'وی‌فایند',
      short_name: 'vFind',
      start_url: '',
      display: 'standalone',
      lang: 'fa',
      orientation: 'portrait',
      description: 'وی‌فایند | موتور جستجوی سوالات امتحانی',
      theme_color: '#1893fe',
      background_color: '#fff',
      start_url: '/',
      icons: [
        {
          "fileName": "icon.png",
          "src": "icon.png",
          "sizes": "512x512"
        },
        {
          "fileName": "android-chrome-512x512.png",
          "src": "android-chrome-512x512.png",
          "sizes": "512x512"
        },
        {
          "fileName": "android-chrome-192x192.png",
          "src": "android-chrome-192x192.png",
          "sizes": "192x192"
        },
        {
          "fileName": "chrome-installprocess-128-128.png",
          "src": "chrome-installprocess-128-128.png",
          "sizes": "128x128"
        },
        {
          "fileName": "apple-touch-icon.png",
          "src": "apple-touch-icon.png",
          "sizes": "180x180"
        },
        {
          "fileName": "favicon.ico",
          "src": "favicon.ico",
          "sizes": "48x48"
        },
        {
          "fileName": "favicon-32x32.png",
          "src": "favicon-32x32.png",
          "sizes": "32x32"
        },
        {
          "fileName": "favicon-16x16.png",
          "src": "favicon-16x16.png",
          "sizes": "16x16"
        },
      ],
    
    },

  
  },

  loading: {
    name: 'chasing-dots',
    color: '#FDBC11',
    background: 'white',
    height: '2px'
  },

  router: {
    middleware: "userAuth"
  },

  toast: {
    position: 'bottom-right',
    duration: 4000,
    keepOnHover: true,
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.VUE_APP_BASE_URL || 'https://csnaapp.ir/api/v1'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  ssr: false,
  // mode: 'spa',

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }

}
