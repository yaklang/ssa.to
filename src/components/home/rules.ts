export const RULES_ROOT = "https://aliyun-oss.yaklang.com/yak";

export interface SyntaxFlowRule {
  id: string;
  rule: string;
  title_en: string;
  title_zh: string;
  detail: string;
  detail_en: string;
  code: string;
  language: string;
  is_lib: boolean;
  score: number;
  sha256: string;
}

function extractTitles(code: string, fallback: string): { en: string; zh: string } {
  if (!code) return { en: fallback, zh: fallback };
  const titleM = code.match(/(?:^|[\r\n\s,])title\s*:\s*(?:"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)')/);
  const titleZhM = code.match(/(?:^|[\r\n\s,])title_zh\s*:\s*(?:"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)')/);
  const clean = (val?: string) => (val ? val.replace(/\\(["'\\])/g, "$1").trim() : "");
  const en = clean(titleM ? (titleM[1] ?? titleM[2]) : "") || fallback;
  const zh = clean(titleZhM ? (titleZhM[1] ?? titleZhM[2]) : "") || fallback;
  return { en, zh };
}

export function normalizeRules(payload: unknown): {
  version: string;
  rules: SyntaxFlowRule[];
} {
  if (
    !payload ||
    typeof payload !== "object" ||
    !("rules" in payload) ||
    !Array.isArray(payload.rules)
  ) {
    throw new Error("Invalid rule catalog");
  }
  const catalog = payload as { version?: unknown; rules: unknown[] };
  const rules = catalog.rules
    .flatMap((item, index) => {
      if (!item || typeof item !== "object") return [];
      const r = item as Record<string, unknown>;
      if (typeof r.rule !== "string" || !r.rule.trim()) return [];
      const string = (key: string) =>
        typeof r[key] === "string" ? (r[key] as string) : "";
      const rawCode = string("code");
      const fallbackRule = string("rule");
      const extracted = extractTitles(rawCode, fallbackRule);
      const title_en = string("title_en") || string("title") || extracted.en;
      const title_zh = string("title_zh") || extracted.zh || fallbackRule;
      return [
        {
          id: `${string("sha256") || fallbackRule}-${index}`,
          rule: fallbackRule,
          title_en,
          title_zh,
          detail: string("detail"),
          detail_en: string("detail_en"),
          code: rawCode,
          language: string("language").trim().toLowerCase() || "general",
          is_lib: r.is_lib === true,
          score:
            typeof r.score === "number" && Number.isFinite(r.score)
              ? r.score
              : 0,
          sha256: string("sha256"),
        },
      ];
    })
    .sort((a, b) => b.score - a.score || a.rule.localeCompare(b.rule));
  if (!rules.length) throw new Error("Empty rule catalog");
  return {
    version: typeof catalog.version === "string" ? catalog.version : "",
    rules,
  };
}

export const isSca = (rule: SyntaxFlowRule) =>
  rule.language === "sca" || /\bsca\b/i.test(rule.rule);

export async function fetchCatalog(signal: AbortSignal) {
  // Each request has its own deadline so the latest fallback can still run.
  const request = async (url: string, json = false) => {
    const response = await fetch(url, {
      signal: AbortSignal.any([signal, AbortSignal.timeout(12000)]),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return json ? response.json() : response.text();
  };
  let engineVersion = "";
  try {
    engineVersion = (
      (await request(`${RULES_ROOT}/latest/version.txt`)) as string
    ).trim();
    if (!/^[\w.-]+$/.test(engineVersion)) throw new Error("Invalid version");
    const catalog = normalizeRules(
      await request(
        `${RULES_ROOT}/${engineVersion}/syntaxflow-meta.json`,
        true,
      ),
    );
    return {
      ...catalog,
      engineVersion,
      sourceUrl: `${RULES_ROOT}/${engineVersion}/syntaxflow-meta.json`,
    };
  } catch (error) {
    if (signal.aborted) throw error;
    const catalog = normalizeRules(
      await request(`${RULES_ROOT}/latest/syntaxflow-meta.json`, true),
    );
    return {
      ...catalog,
      engineVersion,
      sourceUrl: `${RULES_ROOT}/latest/syntaxflow-meta.json`,
    };
  }
}
