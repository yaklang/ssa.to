import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
export default function Cookbook() {
  const { i18n } = useDocusaurusContext();
  const zh = i18n.currentLocale === "zh";
  return (
    <Layout
      title={zh ? "SyntaxFlow 语言手册" : "The SyntaxFlow handbook"}
      description={
        zh
          ? "SyntaxFlow 语言手册的在线阅读与 PDF 下载。"
          : "Read the SyntaxFlow handbook online or download the PDF."
      }
    >
      <main className="academic-handbook">
        <span className="handbook-meta">THE SYNTAXFLOW HANDBOOK / PDF</span>
        <h1>{zh ? "SyntaxFlow 语言手册" : "The SyntaxFlow handbook"}</h1>
        <p>
          {zh
            ? "一份适合连续阅读与离线查阅的语言手册。在线参考文档会随项目演进更新，PDF 保留其导出时的内容；具体命令与参数请同时参考当前 CLI 指南。"
            : "A handbook for continuous reading and offline reference. The online documentation evolves with the project; the PDF reflects its exported edition. Consult the current CLI guide for commands and options."}
        </p>
        <div className="handbook-actions">
          <a href="/pdf/syntaxflow-cookbook.pdf" download>
            {zh ? "下载完整 PDF" : "Download the PDF"} ↓
          </a>
          <Link to="/syntaxflow-guide/intro">
            {zh ? "在线语言参考" : "Online language reference"} →
          </Link>
          <a
            href="/pdf/syntaxflow-cookbook.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {zh ? "在新窗口阅读" : "Open in a new window"} ↗
          </a>
        </div>
        <iframe
          src="/pdf/syntaxflow-cookbook.pdf"
          title={
            zh
              ? "SyntaxFlow 语言手册 PDF 阅读器"
              : "SyntaxFlow handbook PDF reader"
          }
        />
        <p className="handbook-caption">
          {zh
            ? "如果浏览器无法显示 PDF，可下载后使用本地阅读器打开。"
            : "If the browser cannot display the PDF, download it and open it in a local reader."}
        </p>
      </main>
    </Layout>
  );
}
