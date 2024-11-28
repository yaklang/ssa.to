// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env.development";
require("dotenv").config({ path: envFile });
console.log(process.env.NODE_ENV);
console.log("API Base URL:", process.env.REACT_APP_API_BASE_URL);
console.log("Ws Base URL:", process.env.REACT_APP_WS_URL);
// const math = require('remark-math');
// const katex = require('rehype-katex');

const config: Config = {
    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
    // stylesheets: [
    //     {
    //       href: '/katex/katex.min.css',
    //       type: 'text/css',
    //     },
    //   ],

    customFields: {
        wsUrl: process.env.REACT_APP_WS_URL,
    },
    title: "SSA.to",
    tagline: "Static-Single-Assignment Bringing Clarity to Code",
    favicon: "img/favicon.ico",

    url: "https://ssa.to",
    baseUrl: "/",

    organizationName: "yaklang", 
    projectName: "ssa.to",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    trailingSlash: false,

    i18n: {
        defaultLocale: "zh",
        locales: ["zh", "en"],
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: "./sidebars.js",
                    editUrl: 'https://github.com/yaklang/ssa.to/tree/main/docs/',
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                    sidebarCollapsed: false,
                },
                blog: {
                    showReadingTime: true,
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
                target: process.env.REACT_APP_API_BASE_URL,
                changeOrigin: true,
                pathRewrite: { "^/api": "" },
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
              id: 'syntaxflow-guide',
              path: 'syntaxflow-guide',
              routeBasePath: 'syntaxflow-guide',
              sidebarPath: require.resolve('./syntaxflow-guide-sidebars.js'),
              // 添加其他配置
              editUrl: 'https://github.com/yaklang/ssa.to/tree/main/syntaxflow-guide/',
              showLastUpdateTime: true,
              sidebarCollapsed: false,
              showLastUpdateAuthor: true,
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'static-analysis-guide',
                path: 'static-analysis-guide',
                routeBasePath: 'static-analysis-guide',
                sidebarPath: require.resolve('./static-analysis-guide-sidebars.js'),
                editUrl: 'https://github.com/yaklang/ssa.to/tree/main/static-analysis-guide/',
                showLastUpdateTime: true,
                sidebarCollapsed: false,
                showLastUpdateAuthor: true,
            },
        ],
        [
            '@docusaurus/plugin-client-redirects',
            {
                createRedirects: (path) => {
                    console.info(path)
                    if (path === '*') {
                        return ['/'];
                    }
                    return undefined;
                },
            },
        ],
    ],

    themeConfig: {
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
                    sidebarId: "staticAnalysisGuideSidebar",
                    position: "left",
                    label: "静态代码分析教程",
                    docsPluginId: "static-analysis-guide"
                },
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "代码扫描基础使用",
                },
                {
                    type: "docSidebar",
                    sidebarId: "syntaxflowGuideSidebar",
                    position: "left",
                    label: "SyntaxFlow 文档",
                    docsPluginId: "syntaxflow-guide"
                },
                { to: "/cookbook", label: "SyntaxFlow 手册离线 PDF", position: "left" },
                {
                    to: "/codeAnalysis",
                    label: "Code Analysis NOW!", 
                    position: "left",
                },
                {
                    href: "https://github.com/yaklang/ssa.to",
                    label: "GitHub",
                    position: "right",
                },
                {
                    type: "localeDropdown",
                    position: "right",
                }
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
                        {
                            label: "Wechat",
                            to: "docs/community#%E5%BE%AE%E4%BF%A1%E4%BA%A4%E6%B5%81%E7%BE%A4",
                        }
                    ],
                },
                {
                    title: "More",
                    items: [
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
            disableSwitch: true,
        },
    },
};

export default config;
