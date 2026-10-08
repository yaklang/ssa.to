import React from "react";
import OriginalTOC from "@theme-original/DocItem/TOC/Desktop";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
export default function DocTOC(props) {
  const { i18n } = useDocusaurusContext();
  return (
    <aside
      className="academic-doc-toc"
      aria-label={i18n.currentLocale === "zh" ? "本页内容" : "On this page"}
    >
      <p>{i18n.currentLocale === "zh" ? "本页内容" : "ON THIS PAGE"}</p>
      <OriginalTOC {...props} />
    </aside>
  );
}
