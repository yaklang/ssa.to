export const RULES_ROOT = "https://aliyun-oss.yaklang.com/yak";

export interface SyntaxFlowRule {
  id: string;
  rule: string;
  detail: string;
  detail_en: string;
  code: string;
  language: string;
  is_lib: boolean;
  score: number;
  sha256: string;
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
      return [
        {
          id: `${string("sha256") || string("rule")}-${index}`,
          rule: string("rule"),
          detail: string("detail"),
          detail_en: string("detail_en"),
          code: string("code"),
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
