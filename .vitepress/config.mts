import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'LA',
  titleTemplate: 'Portfolio',
  description: 'Samples of my work',
  lang: 'en-US',
  srcExclude: ['**/README.md'],
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo-green.svg',
      media: '(prefers-color-scheme: light)'
    }],
    ['link', {
      rel: 'icon',
      href: '/logo-white.svg',
      media: '(prefers-color-scheme: dark)'
    }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Work', link: '/work' },
    ],

    sidebar: [
      {
        items: [
          { text: 'Work', link: '/work' },
          { text: 'Founding Engineer', link: '/founding-engineer' },
          { text: 'Cypress Advocate', link: '/cypress-advocate' },
          {
            text: 'Professional Development',
            link: '/professional-development',
          },
          { text: 'About Me', link: '/about-me' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/llabend' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/lauraabend' },
    ],

    footer: {
      copyright: 'Copyright © 2026 Laura Abend',
    },
  },
});
