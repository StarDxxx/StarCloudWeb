// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '代码检索',
  tagline: 'Matlab R Python Stata',
  url: 'https://stardx.top',
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
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          postsPerPage: 5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

        // SEO and Search
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-226F0LR9KE',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // SEO 
      metadata: [{name: 'keywords', content: '程序代写, Java环境安装, Python环境安装'}],

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'STARCLOUD',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // 最开始的
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Docs',
            sidebarId: 'envSetup',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'matlab',
            label: 'Matlab',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://xintutor.com',
            label: 'Xintutor',
            position: 'right',
          },
          /*
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'ziyuan',
            label: '资源下载',
          },
          */
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
                href: 'https://xintutor.com',
              },
              {
                label: '微信公众号',
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
        //additionalLanguages: ['matlab'],

      },
    }),
};

module.exports = config;
