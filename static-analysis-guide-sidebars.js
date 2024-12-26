/**
 * 侧边栏配置文件
 * 用于配置 SyntaxFlow 文档的侧边栏结构
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // SyntaxFlow 指南侧边栏
    staticAnalysisGuideSidebar: [
        "intro",
        "topic-compiler-for-static-analysis",
        "compile-ssa-form",
        "ssa-for-advanced-language",
        "ssa-for-advanced-language-2",
        "deep-dive-into-ssa-closure",
        "deep-dive-into-ssa-oop",
        "deep-dive-into-ssa-dataflow-and-cross-procedure",
        "deep-dive-cfg",
    ]
  };
  
  export default sidebars;