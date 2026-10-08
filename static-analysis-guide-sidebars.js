// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
export default {
  staticAnalysisGuideSidebar: [
    {
      type: "category",
      label: "编译与语义基础",
      collapsed: false,
      items: [
        "intro",
        "topic-compiler-for-static-analysis",
        "compile-ssa-form",
      ],
    },
    {
      type: "category",
      label: "高级语言的建模",
      collapsed: false,
      items: [
        "ssa-for-advanced-language",
        "ssa-for-advanced-language-2",
        "deep-dive-into-ssa-closure",
        "deep-dive-into-ssa-oop",
      ],
    },
    {
      type: "category",
      label: "数据流与控制流",
      collapsed: false,
      items: [
        "deep-dive-into-ssa-dataflow-and-cross-procedure",
        "deep-dive-cfg",
      ],
    },
  ],
};
