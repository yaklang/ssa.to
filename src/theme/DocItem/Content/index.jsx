import React from "react";
import OriginalContent from "@theme-original/DocItem/Content";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
export default function DocItemContent(props) {
  const { metadata, frontMatter } = useDoc();
  const { i18n } = useDocusaurusContext();
  const zh = i18n.currentLocale === "zh";
  const source = metadata.source || "";
  const section = source.includes("static-analysis-guide")
    ? ["静态分析原理", "FOUNDATIONS OF STATIC ANALYSIS"]
    : source.includes("syntaxflow-guide")
      ? ["SyntaxFlow 语言参考", "THE SYNTAXFLOW LANGUAGE"]
      : ["工具与实践", "TOOLS & PRACTICE"];
  return (
    <>
      <div className="academic-article-meta">
        <span>
          {section[zh ? 0 : 1]}
          {frontMatter.chapter ? ` / ${frontMatter.chapter}` : ""}
        </span>
        {frontMatter.read_minutes && (
          <span>
            {zh
              ? `阅读约 ${frontMatter.read_minutes} 分钟`
              : `Approx. ${frontMatter.read_minutes} min read`}
          </span>
        )}
      </div>
      <OriginalContent {...props} />
    </>
  );
}
