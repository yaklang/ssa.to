import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
export default function AcademicFooter() {
  const { i18n } = useDocusaurusContext();
  const zh = i18n.currentLocale === "zh";
  return (
    <footer className="academic-footer">
      <div className="academic-footer-inner">
        <div>
          <Link to="/next" className="academic-wordmark">
            ssa.to
          </Link>
          <p>
            {zh
              ? "程序分析，始于对语义的理解。"
              : "Program analysis begins with semantics."}
          </p>
        </div>
        <nav
          aria-label={zh ? "文档与项目链接" : "Documentation and project links"}
        >
          <Link to="/docs/intro">{zh ? "文档导读" : "Documentation"}</Link>
          <Link to="/next#rules">{zh ? "规则库" : "Rule catalog"}</Link>
          <a href="https://yaklang.io" target="_blank" rel="noreferrer">
            yaklang.io ↗
          </a>
          <a href="https://yaklang.com" target="_blank" rel="noreferrer">
            yaklang.com ↗
          </a>
          <a
            href="https://github.com/yaklang/ssa.to"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
        <div className="academic-footer-bottom">
          <span>© {new Date().getFullYear()} SSA.to · Yak Project</span>
          <Link to="/">{zh ? "原版首页" : "Original homepage"} →</Link>
        </div>
      </div>
    </footer>
  );
}
