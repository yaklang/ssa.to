import React, { useEffect, useState } from "react";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { useUiZh } from "@site/src/components/docs/UiLocale";

const englishHeading = {
  从语法到中间表示: "From syntax to IR",
  "为什么讨论 SSA": "Why SSA",
  一个常量传播示例: "Constant propagation",
  从编译优化到安全分析: "Optimization and security",
  "Yak SSA 与 SyntaxFlow 的分工": "Yak SSA and SyntaxFlow",
  本教程的阅读顺序: "Reading order",
  原始资料与参考: "Sources",
  建立一个可验证的分析问题: "A question you can check",
  按问题查阅语法: "Syntax by question",
  理解两种追踪方向: "Two directions of tracing",
  分析能力与边界: "What the analysis can and cannot do",
  建议的练习顺序: "Practice order",
  选择你的阅读路径: "Choose a reading path",
  从源程序到分析结果: "From source to a result",
  三组文档的分工: "Three groups of documents",
  资料与项目: "Sources and projects",
  使用与授权: "Use and licensing",
};

function visibleItems(toc, min, max) {
  return toc.filter((item) => item.level >= min && item.level <= max);
}

export default function DocTOC() {
  const { toc, frontMatter } = useDoc();
  const zh = useUiZh();
  const min = frontMatter.toc_min_heading_level ?? 2;
  const max = frontMatter.toc_max_heading_level ?? 3;
  const items = visibleItems(toc, min, max);
  const itemKey = items.map((item) => item.id).join("|");
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const ids = itemKey ? itemKey.split("|") : [];
    const heads = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (heads.length === 0) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-80px 0px -65% 0px", threshold: [0, 1] },
    );
    heads.forEach((head) => observer.observe(head));
    return () => observer.disconnect();
  }, [itemKey]);

  if (items.length === 0) return null;

  return (
    <aside
      className="academic-doc-toc"
      aria-label={zh ? "本页内容" : "On this page"}
    >
      <p>{zh ? "本页内容" : "On this page"}</p>
      <ul className="academic-toc">
        {items.map((item) => {
          const text = !zh && englishHeading[item.value]
            ? englishHeading[item.value]
            : item.value;
          return (
            <li
              key={item.id}
              className={item.level > min ? "is-nested" : undefined}
            >
              <a
                href={`#${item.id}`}
                className={item.id === activeId ? "is-active" : undefined}
              >
                <span>{text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
