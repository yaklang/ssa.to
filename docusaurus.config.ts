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

const config: Config = {
    webpack: {
        jsLoader: (isServer) => ({
            loader: require.resolve('esbuild-loader'),
            options: {
                loader: 'tsx',
                format: isServer ? 'cjs' : undefined,
                target: isServer ? 'node12' : 'es2017',
            },
        }),
    },
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
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.js",
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
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "代码扫描基础使用",
                },
                { to: "/cookbook", label: "SyntaxFlow 扫描规则编写指南", position: "left" },
                {
                    to: "/codeAnalysis",
                    label: "Code Analysis", 
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
