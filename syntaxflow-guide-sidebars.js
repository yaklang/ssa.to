/**
 * 侧边栏配置文件
 * 用于配置 SyntaxFlow 文档的侧边栏结构
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // SyntaxFlow 指南侧边栏
  syntaxflowGuideSidebar: [
    'intro',
    'quick-start',
    'rule-intro',
    {
      type: 'category',
      label: '编写基础的 SyntaxFlow 规则',
      items: [
        {
          type: 'doc',
          label: 'SytanxFlow 规则介绍',
          id: 'rule-intro'
        },
        "statements/intro-and-desc",
        "statements/sf-search",
        "statements/sf-func-call",
        "statements/sf-variable",
        "statements/sf-dot-call-chain",
        "statements/sf-dataflow",
        "statements/sf-filter",
        "statements/sf-calc",
        "statements/sf-nativecall",
        "statements/sf-sca",
      ]
    }
  ]
};

export default sidebars;