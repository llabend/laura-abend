import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/laura-abend/",
  title: "Laura Abend",
  titleTemplate: "Portfolio",
  head: [
    ['link', { rel: 'icon', href: '/laura-abend/favicon.ico' }]
  ],
  description: "Samples of my work",
  lang: 'en-US',
  srcExclude: ['**/README.md'],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Samples', link: '/work-samples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Work Samples', link: '/work-samples' },
          { text: 'About Me', link: '/about-me' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/llabend' }
    ],

    footer: {
      copyright: 'Copyright © 2024 Laura Abend'
    }
  }
})
