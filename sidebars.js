// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
export default {
  tutorialSidebar: [
    { type: "doc", id: "intro", label: "文档导读" },
    {
      type: "category",
      label: "命令行实践",
      collapsed: false,
      link: {
        type: "generated-index",
        slug: "/category/cli-使用",
        title: "命令行实践",
        description: "从编译与查询，到扫描报告和 Program 管理。",
      },
      items: [
        "cli/overview",
        "cli/compile_query",
        "cli/scan",
        "cli/other_commands",
        "cli/skill",
      ],
    },
    {
      type: "category",
      label: "图形化工作环境",
      collapsed: false,
      items: ["code_audit", "code_scan"],
    },
    "community",
  ],
};
