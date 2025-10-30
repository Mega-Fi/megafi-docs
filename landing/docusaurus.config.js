// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MegaFi',
  tagline: 'Real-Time Options Trading on MegaETH',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://docs.megafi.app',
  baseUrl: '/',

  organizationName: 'megafi',
  projectName: 'megafi-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'MegaFi',
        logo: {
          alt: 'MegaFi Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://megafi.app',
            label: 'Launch App',
            position: 'right',
          },
          {
            href: 'https://github.com/Mega-Fi',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started/welcome',
              },
              {
                label: 'Hedge (Options)',
                to: '/hedge/overview',
              },
              {
                label: 'DEX',
                to: '/dex/overview',
              },
              {
                label: 'CLM',
                to: '/clm/overview',
              },
            ],
          },
          {
            title: 'Technical',
            items: [
              {
                label: 'Architecture',
                to: '/technical/architecture',
              },
              {
                label: 'Smart Contracts',
                to: '/technical/smart-contracts',
              },
              {
                label: 'Security Audits',
                to: '/technical/security-audits',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/megafi',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/megafi',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Mega-Fi',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://megafi.app',
              },
              {
                label: 'MegaETH',
                href: 'https://megaeth.com',
              },
            ],
          },
        ],
        copyright: `MegaFi ${new Date().getFullYear()} • Built on MegaETH`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['solidity', 'javascript', 'typescript', 'bash'],
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
    }),
  
  markdown: {
    mermaid: true,
  },
  
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
