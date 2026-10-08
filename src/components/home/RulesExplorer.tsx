import React, {
  Fragment,
  lazy,
  Suspense,
  useEffect,
  useMemo,
  useState,
} from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import Link from "@docusaurus/Link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Copy,
  RefreshCw,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import { fetchCatalog, isSca, RULES_ROOT, type SyntaxFlowRule } from "./rules";
import styles from "./home.module.scss";

const RuleEditor = lazy(() => import("../SsaEditor/index.module"));
const PAGE_SIZE = 12;
const languageNames: Record<string, string> = {
  java: "Java",
  golang: "Go",
  js: "JavaScript",
  php: "PHP",
  python: "Python",
  c: "C",
  csharp: "C#",
  general: "General",
  sca: "SCA",
  yak: "Yak",
};

function RuleSource({ rule, zh }: { rule: SyntaxFlowRule; zh: boolean }) {
  const [copyState, setCopyState] = useState("");
  const raw = (
    <pre className={styles.rawSource}>
      <code>{rule.code}</code>
    </pre>
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(rule.code);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }
  return (
    <div className={styles.ruleSource}>
      <div className={styles.sourceHeading}>
        <div>
          <Code2 size={16} />
          <span>SyntaxFlow</span>
          <span className={styles.sourceTag}>
            {languageNames[rule.language] || rule.language}
          </span>
        </div>
        <button
          onClick={copy}
          disabled={!rule.code}
          className={styles.smallButton}
        >
          {copyState === "copied" ? <Check size={14} /> : <Copy size={14} />}
          {copyState === "copied"
            ? zh
              ? "已复制"
              : "Copied"
            : zh
              ? "复制规则"
              : "Copy rule"}
        </button>
      </div>
      <p className={styles.ruleDescription}>
        {(zh ? rule.detail : rule.detail_en || rule.detail) ||
          (zh ? "暂无描述" : "No description available")}
      </p>
      {copyState === "error" && (
        <p role="status">
          {zh
            ? "复制失败，请在下方选中源码手动复制。"
            : "Copy failed. Select the source below to copy it manually."}
        </p>
      )}
      {rule.code ? (
        <div className={styles.editor}>
          <ErrorBoundary fallback={() => raw}>
            <BrowserOnly fallback={raw}>
              {() => (
                <Suspense fallback={raw}>
                  <RuleEditor
                    value={rule.code.trimEnd()}
                    onSetValue={() => {}}
                    language="syntaxflow"
                    readOnly
                    wordWrap
                    editorOptions={{
                      fontSize: 13,
                      lineHeight: 22,
                      minimap: { enabled: false },
                      scrollBeyondLastLine: false,
                    }}
                  />
                </Suspense>
              )}
            </BrowserOnly>
          </ErrorBoundary>
        </div>
      ) : (
        <p>
          {zh ? "该条目未提供源码。" : "Source is not provided for this entry."}
        </p>
      )}
      {rule.sha256 && (
        <div className={styles.sourceHash}>
          SHA256 <span>{rule.sha256}</span>
        </div>
      )}
    </div>
  );
}

export default function RulesExplorer({ zh }: { zh: boolean }) {
  const [catalog, setCatalog] = useState<{
    version: string;
    engineVersion: string;
    sourceUrl: string;
    rules: SyntaxFlowRule[];
  } | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const [attempt, setAttempt] = useState(0);
  const [language, setLanguage] = useState("all");
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("all");
  const [score, setScore] = useState("all");
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");
    fetchCatalog(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) {
          setCatalog(data);
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!controller.signal.aborted) setStatus("error");
      });
    return () => controller.abort();
  }, [attempt]);
  const rules = catalog?.rules || [];
  const languages = useMemo(
    () =>
      [
        ...new Set(rules.map((r) => r.language).filter((l) => l !== "sca")),
      ].sort(),
    [catalog],
  );
  const counts = useMemo(
    () =>
      Object.fromEntries(
        languages.map((l) => [l, rules.filter((r) => r.language === l).length]),
      ),
    [catalog, languages],
  );
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return rules.filter(
      (r) =>
        (language === "all" ||
          (language === "sca" ? isSca(r) : r.language === language)) &&
        (kind === "all" || (kind === "lib" ? r.is_lib : !r.is_lib)) &&
        (score === "all" || r.score >= 8) &&
        (!term ||
          [r.rule, r.detail, r.detail_en, r.code].some((value) =>
            value.toLowerCase().includes(term),
          )),
    );
  }, [catalog, language, query, kind, score]);
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pages);
  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );
  function resetPage() {
    setPage(1);
    setExpanded(null);
  }
  function resetFilters() {
    setLanguage("all");
    setQuery("");
    setKind("all");
    setScore("all");
    resetPage();
  }
  const tabs = [
    { key: "all", label: zh ? "全部规则" : "All rules", count: rules.length },
    ...languages.map((l) => ({
      key: l,
      label: languageNames[l] || l,
      count: counts[l],
    })),
    { key: "sca", label: "SCA", count: rules.filter(isSca).length },
  ];

  return (
    <section
      id="rules"
      className={styles.rulesSection}
      aria-labelledby="rules-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow}>I. THE RULE CATALOG</span>
            <h2 id="rules-title">
              {zh ? "SyntaxFlow 规则库" : "The SyntaxFlow rule catalog"}
            </h2>
            <p>
              {zh
                ? "一个持续演进的程序分析规则集。检索规则，阅读源码，理解分析背后的逻辑。"
                : "An evolving collection of program analysis rules. Search the catalog, read the source, and inspect the underlying logic."}
            </p>
          </div>
          <Link className={styles.textLink} to="/syntaxflow-guide/rule-intro">
            {zh ? "学习编写规则" : "Write your first rule"}
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className={styles.ruleStats}>
          <div>
            <span>{zh ? "规则总数" : "Total rules"}</span>
            <strong>{catalog ? rules.length.toLocaleString() : "—"}</strong>
            <small>SYNTAXFLOW RULES</small>
          </div>
          <div>
            <span>{zh ? "语言分类" : "Language categories"}</span>
            <strong>{catalog ? languages.length : "—"}</strong>
            <small>MULTI-LANGUAGE</small>
          </div>
          <div>
            <span>{zh ? "库规则" : "Library rules"}</span>
            <strong>
              {catalog ? rules.filter((r) => r.is_lib).length : "—"}
            </strong>
            <small>REUSABLE LOGIC</small>
          </div>
          <div className={styles.versionStat}>
            <span className={styles.liveLabel}>
              <i />
              {zh ? "规则库版本" : "Catalog version"}
            </span>
            <strong>
              {catalog?.version ||
                (status === "error"
                  ? zh
                    ? "暂不可用"
                    : "Unavailable"
                  : zh
                    ? "加载中"
                    : "Loading")}
            </strong>
            <small>
              {zh ? "与 Yak 引擎规则源同步" : "FROM THE YAK ENGINE CATALOG"}
            </small>
          </div>
        </div>
        <div className={styles.ruleWorkbench}>
          <div className={styles.workbenchTitle}>
            <div>
              <ShieldCheck size={18} />
              <strong>SyntaxFlow</strong>
              <span>{zh ? "规则浏览器" : "Rule explorer"}</span>
            </div>
            <a
              href={
                catalog?.sourceUrl ||
                `${RULES_ROOT}/latest/syntaxflow-meta.json`
              }
              target="_blank"
              rel="noreferrer"
            >
              JSON
              <ArrowUpRight size={13} />
            </a>
          </div>
          <div
            className={styles.languageTabs}
            role="group"
            aria-label={zh ? "按语言筛选" : "Filter by language"}
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                aria-pressed={language === tab.key}
                className={language === tab.key ? styles.activeTab : ""}
                onClick={() => {
                  setLanguage(tab.key);
                  resetPage();
                }}
              >
                {tab.label}
                <span>{catalog ? tab.count : "—"}</span>
              </button>
            ))}
          </div>
          <div className={styles.ruleFilters}>
            <div className={styles.searchBox}>
              <Search size={17} />
              <input
                type="search"
                value={query}
                aria-label={zh ? "搜索规则" : "Search rules"}
                placeholder={
                  zh
                    ? "搜索规则名称、描述或源码…"
                    : "Search names, descriptions, or source…"
                }
                onChange={(e) => {
                  setQuery(e.target.value);
                  resetPage();
                }}
              />
            </div>
            <select
              aria-label={zh ? "规则类型" : "Rule type"}
              value={kind}
              onChange={(e) => {
                setKind(e.target.value);
                resetPage();
              }}
            >
              <option value="all">{zh ? "全部类型" : "All types"}</option>
              <option value="audit">{zh ? "审计规则" : "Audit rules"}</option>
              <option value="lib">{zh ? "库规则" : "Library rules"}</option>
            </select>
            <select
              aria-label={zh ? "威胁评分" : "Threat score"}
              value={score}
              onChange={(e) => {
                setScore(e.target.value);
                resetPage();
              }}
            >
              <option value="all">{zh ? "全部评分" : "All scores"}</option>
              <option value="high">{zh ? "高评分 ≥ 8" : "Score ≥ 8"}</option>
            </select>
            <button
              className={styles.iconButton}
              aria-label={zh ? "刷新规则" : "Refresh rules"}
              disabled={status === "loading"}
              onClick={() => setAttempt((a) => a + 1)}
            >
              <RefreshCw size={17} />
            </button>
          </div>
          {status === "loading" && !catalog ? (
            <div
              className={`${styles.emptyState} ${styles.initialLoading}`}
              role="status"
            >
              <span className={styles.loader} />
              <h3>{zh ? "正在加载规则库" : "Loading the rule catalog"}</h3>
              <p>
                {zh
                  ? "获取 Yak 引擎的最新规则数据…"
                  : "Fetching the latest catalog from the Yak engine…"}
              </p>
            </div>
          ) : status === "error" ? (
            <div className={styles.emptyState} role="alert">
              <h3>
                {zh ? "规则库暂时无法加载" : "The rule catalog is unavailable"}
              </h3>
              <p>
                {zh
                  ? "请检查网络后重试，也可以直接查看规则文档。"
                  : "Check your connection and retry, or explore the rule documentation."}
              </p>
              <button
                className={styles.smallButton}
                onClick={() => setAttempt((a) => a + 1)}
              >
                <RefreshCw size={14} />
                {zh ? "重新加载" : "Retry"}
              </button>
            </div>
          ) : filtered.length === 0 ? (
            <div className={styles.emptyState} role="status">
              <Search size={25} />
              <h3>{zh ? "没有匹配的规则" : "No matching rules"}</h3>
              <p>
                {zh
                  ? "试试其他关键词，或清除筛选条件。"
                  : "Try another keyword or clear your filters."}
              </p>
              <button className={styles.smallButton} onClick={resetFilters}>
                <X size={14} />
                {zh ? "清除筛选" : "Clear filters"}
              </button>
            </div>
          ) : (
            <div className={styles.tableScroll}>
              <table className={styles.ruleTable}>
                <caption className={styles.srOnly}>
                  {zh
                    ? "SyntaxFlow 规则列表，按威胁评分降序排列"
                    : "SyntaxFlow rules, sorted by descending threat score"}
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      {zh ? "规则 / 描述" : "Rule / description"}
                    </th>
                    <th scope="col">{zh ? "语言" : "Language"}</th>
                    <th scope="col">{zh ? "类型" : "Type"}</th>
                    <th scope="col">
                      {zh ? "威胁评分" : "Score"}
                      <ArrowDown size={12} />
                    </th>
                    <th scope="col">
                      <span className={styles.srOnly}>
                        {zh ? "源码" : "Source"}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((rule) => (
                    <Fragment key={rule.id}>
                      <tr
                        className={
                          expanded === rule.id ? styles.expandedRow : ""
                        }
                      >
                        <td>
                          <button
                            className={styles.ruleName}
                            aria-expanded={expanded === rule.id}
                            aria-controls={`source-${rule.id}`}
                            onClick={() =>
                              setExpanded(expanded === rule.id ? null : rule.id)
                            }
                          >
                            {rule.rule}
                          </button>
                          <p>
                            {(zh
                              ? rule.detail
                              : rule.detail_en || rule.detail) || "—"}
                          </p>
                        </td>
                        <td>
                          <span className={styles.languageBadge}>
                            {languageNames[rule.language] || rule.language}
                          </span>
                        </td>
                        <td>
                          <span
                            className={
                              rule.is_lib
                                ? styles.libraryBadge
                                : styles.auditBadge
                            }
                          >
                            {rule.is_lib
                              ? zh
                                ? "库规则"
                                : "Library"
                              : zh
                                ? "审计规则"
                                : "Audit"}
                          </span>
                        </td>
                        <td>
                          <span
                            className={
                              rule.score >= 8
                                ? styles.highScore
                                : styles.normalScore
                            }
                          >
                            {rule.score.toFixed(1)}
                          </span>
                        </td>
                        <td>
                          <button
                            className={styles.iconButton}
                            aria-label={`${zh ? "查看规则源码：" : "View source: "}${rule.rule}`}
                            aria-expanded={expanded === rule.id}
                            aria-controls={`source-${rule.id}`}
                            onClick={() =>
                              setExpanded(expanded === rule.id ? null : rule.id)
                            }
                          >
                            {expanded === rule.id ? (
                              <X size={16} />
                            ) : (
                              <Code2 size={16} />
                            )}
                          </button>
                        </td>
                      </tr>
                      {expanded === rule.id && (
                        <tr id={`source-${rule.id}`}>
                          <td colSpan={5}>
                            <RuleSource rule={rule} zh={zh} />
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className={styles.pagination}>
            <span role="status">
              {status === "ready"
                ? zh
                  ? `共 ${filtered.length.toLocaleString()} 条 · 按威胁评分排序`
                  : `${filtered.length.toLocaleString()} results · sorted by threat score`
                : zh
                  ? "数据来自官方规则源"
                  : "Data from the official rule catalog"}
            </span>
            <div>
              <button
                aria-label={zh ? "上一页" : "Previous page"}
                disabled={currentPage <= 1 || status !== "ready"}
                onClick={() => {
                  setPage(currentPage - 1);
                  setExpanded(null);
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <span>
                {currentPage} / {pages}
              </span>
              <button
                aria-label={zh ? "下一页" : "Next page"}
                disabled={currentPage >= pages || status !== "ready"}
                onClick={() => {
                  setPage(currentPage + 1);
                  setExpanded(null);
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
