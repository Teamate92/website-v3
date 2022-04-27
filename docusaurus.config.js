// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Connectivity Device Managment',
  tagline: 'Schneider Electric',
  url: 'https://teamate92.github.io',
  baseUrl: '/website-v3/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'teamate92', // Usually your GitHub org/user name.
  projectName: 'website-v3', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Teamate92/website-v3/blob/master',
        },
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
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
              type:'doc',
              docId:'generic-infos/what-is-etp',
              position: 'left',
              label: 'Generic Infos',
          },
          {
            type: 'doc',
            docId: 'use-cases/device-prerequisite',
            position: 'left',
            label: 'Use cases',
          },
          {
            type: 'doc',
            docId: 'cloud-prerequisite/open-a-tenant',
            position: 'left',
            label: 'Cloud Prerequisite',
          },
          {
            type: 'doc',
            docId: 'sensors/introduction',
            position: 'left',
            label: 'Sensors',
          },
          {
            type: 'doc',
            docId: 'constraint-devices/introduction',
            position: 'left',
            label: 'Constraint Devices',
          },
          {
            type: 'doc',
            docId: 'iot-devices/introduction',
            position: 'left',
            label: 'IoT Devices',
          },
          {
            type: 'doc',
            docId: 'small-gateway/introduction',
            position: 'left',
            label: '"Small Gateway"',
          },
          {
            type: 'doc',
            docId: 'big-gateway/introduction',
            position: 'left',
            label: '"Big Gateway"',
          },
          //Right
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.schneider-electric.com/IoT/cdm-user-documentation',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
          {
            //title: 'More',
            items: [
              /*{
                label: 'Blog',
                to: '/blog',
              },
              */
              {
                href: 'https://github.schneider-electric.com/IoT/cdm-user-documentation',
                label: 'GitHub',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Schneider Electric, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
