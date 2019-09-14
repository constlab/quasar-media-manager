const path = require('path')

module.exports = {
  title: 'Quasar Media Manager',
  components: 'src/components/**/[A-Z]*.vue',
  defaultExample: false,
  pagePerSection: true,
  usageMode: 'expand',
  require: [path.join(__dirname, 'global.requires.js')],
  styles: {
    Logo: {
      logo: {
        color: '#fff',
        fontSize: 24,
      },
    },
  },
  template: {
    head: {
      links: [
        {
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
          rel: 'stylesheet',
        },
        {
          href: 'https://cdn.jsdelivr.net/npm/quasar@^1.1.0/dist/quasar.min.css',
          rel: 'stylesheet',
        },
      ],
    },
  },
  serverPort: 3000,
  editorConfig: {
    theme: 'xq-light',
  },
  theme: {
    fontFamily: {
      monospace: ['Menlo', 'Consolas', '"Liberation Mono"', 'monospace'],
    },
    color: {
      link: '#fff',
      sidebarBackground: '#009688',
    },
    sidebarWidth: 250,
    maxWidth: 'none',
  },
}
