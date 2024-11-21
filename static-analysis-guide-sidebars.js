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
        "compile-ssa-form",
        "ssa-for-advanced-language",
        "deep-dive-into-ssa-oop",
        "deep-dive-into-ssa-closure",
        "deep-dive-into-ssa-use-def-chain",
        "deep-dive-into-ssa-cross-procedure",
    ]
  };
  
  export default sidebars;