// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
require("dotenv").config({ path: envFile });

const config: Config = {
  customFields: {
    wsUrl: process.env.REACT_APP_WS_URL,
  },
  title: "SSA.to",
  tagline: "Static-Single-Assignment Bringing Clarity to Code",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://ssa.to",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "yaklang", // Usually your GitHub org/user name.
  projectName: "ssa.to", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
      },
    ],
  ],

  plugins: [
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-proxy",
      {
        context: ["/api"],
        target: process.env.REACT_APP_API_BASE_URL || "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "SSA.to",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/yaklang/ssa.to",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //     label: 'Stack Overflow',
            //     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //     label: 'Discord',
            //     href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
            //     label: 'Twitter',
            //     href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/yaklang/ssa.to",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ssa.to, Powered by yaklang.io`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      disableSwitch: true, // 禁用颜色模式切换按钮
    },
  },
};

export default config;
