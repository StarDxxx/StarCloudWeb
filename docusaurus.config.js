// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '代码检索',
  tagline: 'Matlab R Python Stata',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'StarDxxx', // Usually your GitHub org/user name.
  projectName: 'StarCloudWeb', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'STARCLOUD',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://docusaurus.io/zh-CN/docs/2.0.0-beta.14',
            label: 'Docusaurus文档',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '项目',
            items: [
              {
                label: '多方法轴承诊断 [novel]',
                href: '#',
              },
              {
                label: '零水印 加密解密',
                href: '#',
              },
              {
                label: 'Transformer & Informer',
                to: '#',
              },
              {
                label: 'KMeans++',
                href: '#',
              },
              {
                label: '量化',
                href: '#',
              },
              {
                label: '社交网络',
                href: '#',
              },
              {
                label: '大疆无人机航点',
                href: '#',
              },
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'PDE 火箭轨道模拟',
                href: '#',
              },
              {
                label: 'PSO ',
                href: '#',
              },
              {
                label: 'Unity AR',
                href: '#',
              },
              {
                label: 'R Machine Learning',
                href: '#',
              },
              {
                label: 'R Survival Analysis',
                href: '#',
              },
              {
                label: 'Kaggle Top 5%',
                href: '#',
              },
              {
                label: 'Apriori Data Mining',
                href: '#',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
			        {
                label: '知乎',
                href: 'https://www.zhihu.com/people/starCloud',
              },
              {
                label: 'xintutor',
                href: 'https://stardx.top',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} STARCLOUD, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
