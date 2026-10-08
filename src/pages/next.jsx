import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { PageMetadata } from "@docusaurus/theme-common";
import LayoutProvider from "@theme/Layout/Provider";
import HomePage from "@site/src/components/home/HomePage";
export default function NextHomepage() {
  const { i18n } = useDocusaurusContext();
  const zh = i18n.currentLocale === "zh";
  return (
    <LayoutProvider>
      <PageMetadata
        title={
          zh
            ? "SSA.to · 程序语义与静态安全分析"
            : "SSA.to · Program Semantics & Static Analysis"
        }
        description={
          zh
            ? "以 SSA 中间表示和 SyntaxFlow 规则研究程序语义、数据流与代码安全。"
            : "Explore program semantics, data flow, and code security through SSA and SyntaxFlow rules."
        }
      />
      <HomePage zh={zh} />
    </LayoutProvider>
  );
}
