import React, { useEffect, useState } from "react";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { useUiZh } from "@site/src/components/docs/UiLocale";

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
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level > min ? "is-nested" : undefined}
          >
            <a
              href={`#${item.id}`}
              className={item.id === activeId ? "is-active" : undefined}
            >
              <span>{item.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
