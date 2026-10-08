export function academicNavbarItems(items, zh) {
  const labels = {
    staticAnalysisGuideSidebar: zh ? "静态分析" : "Foundations",
    tutorialSidebar: zh ? "工具指南" : "Practice",
    syntaxflowGuideSidebar: "SyntaxFlow",
  };
  return items.map((item) => ({
    ...item,
    label:
      labels[item.sidebarId] ||
      (item.to === "/cookbook" ? (zh ? "语言手册" : "Handbook") : item.label),
  }));
}
