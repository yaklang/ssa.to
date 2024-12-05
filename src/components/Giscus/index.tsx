import React, { useEffect, useRef } from 'react';

interface GiscusProps {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
  mapping: string;
  strict?: string;
  reactionsEnabled?: string;
  emitMetadata?: string;
  inputPosition?: string;
  theme?: string;
  lang?: string;
  loading?: string;
}

export default function Giscus({
  repo = "yaklang/ssa.to",
  repoId = "R_kgDOLlB9TA",
  category = "Announcements",
  categoryId = "DIC_kwDOLlB9TM4Ck7o3",
  mapping = "pathname",
  strict = "0",
  reactionsEnabled = "1",
  emitMetadata = "0",
  inputPosition = "bottom",
  theme = "light",
  lang = "zh-CN",
  loading = "lazy"
}: GiscusProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isGiscusLoaded = useRef(false);

  useEffect(() => {
    if (!containerRef.current || isGiscusLoaded.current) return;
    
    const script = document.createElement('script');
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", repo);
    script.setAttribute("data-repo-id", repoId);
    script.setAttribute("data-category", category);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", mapping);
    script.setAttribute("data-strict", strict);
    script.setAttribute("data-reactions-enabled", reactionsEnabled);
    script.setAttribute("data-emit-metadata", emitMetadata);
    script.setAttribute("data-input-position", inputPosition);
    script.setAttribute("data-theme", theme);
    script.setAttribute("data-lang", lang);
    script.setAttribute("data-loading", loading);
    script.crossOrigin = "anonymous";
    script.async = true;

    containerRef.current.appendChild(script);
    isGiscusLoaded.current = true;

    return () => {
      // 清理函数
      const iframe = document.querySelector('iframe.giscus-frame');
      if (iframe) {
        iframe.remove();
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      isGiscusLoaded.current = false;
    };
  }, []);

  return <div ref={containerRef} />;
}