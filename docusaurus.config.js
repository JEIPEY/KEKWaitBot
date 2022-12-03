// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KEKWaitBot',
  tagline: '',
  url: 'https://github.io/',
  baseUrl: '/KEKWaitBot/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: "JEIPEY",
  projectName: "KEKWaitBot",
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
          customCss: require.resolve('./src/css/custom.css'),
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
            to: '/KEKWaitBot/Logs',
            label: 'Logs',
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

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
