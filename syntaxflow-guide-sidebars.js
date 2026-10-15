// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
export default {
  syntaxflowGuideSidebar: [
    {
      type: "category",
      label: "导读与规则结构",
      collapsed: false,
      items: [
        "intro",
        "quick-start",
        "rule-intro",
        "statements/intro-and-desc",
      ],
    },
    {
      type: "category",
      label: "查询语言",
      collapsed: false,
      items: [
        "statements/sf-search",
        "statements/sf-func-call",
        "statements/sf-variable",
        "statements/sf-dot-call-chain",
        "statements/sf-dataflow",
        "statements/sf-filter",
        "statements/sf-calc",
      ],
    },
    {
      type: "category",
      label: "扩展与分析实践",
      collapsed: false,
      items: [
        "statements/sf-nativecall",
        "nativecall-demos",
        "statements/sf-sca",
        "statements/sf_file_filter",
        "advanced/advanced-analyzing-dataflow",
      ],
    },
  ],
};
