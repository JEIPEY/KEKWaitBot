// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KEKWaitBot',
  tagline: 'Бот для чата',
  favicon: 'img/favicon.ico',
  future: {
    v4: true, // 
  },
  url: 'https://github.io/',
  baseUrl: '/',
  organizationName: 'JEIPEY',
  projectName: 'KEKWaitBot',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: "gh-pages",

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        navbar: {
        title: 'KEKWaitBot',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Команды',
          },       
          {
            to: '/Logs',
            label: 'Обновления',
            position: 'left',
          },  
          {
            to: 'https://www.twitch.tv/jeipey',
            label: 'Twitch',
            position: 'right',
          },
          {
            to: 'https://discord.com/invite/uzJRD4wCt6',
            label: 'Discord',
            position: 'right',
          },
          {
            to: 'https://t.me/privetjeipey',
            label: 'Telegram',
            position: 'right',
          },
        ],
      },
    }),
};

export default config;
