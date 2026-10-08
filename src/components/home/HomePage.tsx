import React, { useState } from "react";
import Link from "@docusaurus/Link";
import useBrokenLinks from "@docusaurus/useBrokenLinks";
import { SkipToContentFallbackId } from "@docusaurus/theme-common";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import RulesExplorer from "./RulesExplorer";
import Downloads from "./Downloads";
import styles from "./home.module.scss";
import Navbar from "@theme/Navbar";
import "@site/src/css/academic-docs.scss";
const studies = [
  {
    number: "01",
    title: ["统一的中间表示", "A common representation"],
    description: [
      "将不同语言的程序编译为 SSA IR。在统一的语义结构上理解赋值、分支与循环，消解语法表象的差异。",
      "Compile programs into SSA IR. Understand assignments, branches, and loops through a common semantic structure.",
    ],
    to: "/static-analysis-guide/compile-ssa-form",
    link: ["静态单赋值形式", "Static single assignment"],
  },
  {
    number: "02",
    title: ["可追溯的数据流", "Traceable data flow"],
    description: [
      "连接数据流与控制流，跨越文件与过程边界。沿着值的传播路径，研究输入如何影响程序的行为。",
      "Connect data flow and control flow across files and procedures. Study how inputs shape program behavior along the paths of values.",
    ],
    to: "/static-analysis-guide/deep-dive-into-ssa-dataflow-and-cross-procedure",
    link: ["过程间分析", "Interprocedural analysis"],
  },
  {
    number: "03",
    title: ["可阅读的分析规则", "Readable analysis rules"],
    description: [
      "用 SyntaxFlow 表达查询、过滤与路径约束。将审计思路写成可执行、可复用的规则，并检视其中的推理逻辑。",
      "Express queries, filters, and path constraints in SyntaxFlow. Turn an audit idea into a readable, executable, reusable rule.",
    ],
    to: "/syntaxflow-guide/rule-intro",
    link: ["SyntaxFlow 规则", "SyntaxFlow rules"],
  },
];
const readings = [
  {
    number: "01",
    label: ["代码扫描基础", "Scanning essentials"],
    body: [
      "安装、编译与查询：从第一次扫描开始。",
      "Installation, compilation, and queries. Begin with your first scan.",
    ],
    to: "/docs/intro",
    tag: "GETTING STARTED",
  },
  {
    number: "02",
    label: ["SyntaxFlow 语言指南", "The SyntaxFlow language"],
    body: [
      "查询语法、数据流运算与原生调用。",
      "Query syntax, data flow operators, and native calls.",
    ],
    to: "/syntaxflow-guide/intro",
    tag: "LANGUAGE REFERENCE",
  },
  {
    number: "03",
    label: ["静态分析原理", "Foundations of static analysis"],
    body: [
      "SSA、控制流、闭包与面向对象程序分析。",
      "SSA, control flow, closures, and object-oriented analysis.",
    ],
    to: "/static-analysis-guide/intro",
    tag: "THEORY & PRACTICE",
  },
  {
    number: "04",
    label: ["SyntaxFlow 语言手册", "The SyntaxFlow handbook"],
    body: [
      "完整手册的 PDF 离线版本。",
      "The complete handbook, available as an offline PDF.",
    ],
    to: "/cookbook",
    tag: "OFFLINE HANDBOOK",
  },
];
function AnalysisFigure({ zh }: { zh: boolean }) {
  const [flag, setFlag] = useState(true);
  return (
    <figure className={styles.analysisFigure}>
      <div
        className={styles.phiCondition}
        role="group"
        aria-label={zh ? "切换 if 条件" : "Choose the if condition"}
      >
        {[true, false].map((value) => (
          <button
            type="button"
            key={String(value)}
            aria-pressed={flag === value}
            onClick={() => setFlag(value)}
          >
            flag = {String(value)}
          </button>
        ))}
      </div>
      <svg
        viewBox="0 0 400 300"
        role="img"
        aria-label={
          zh
            ? `if 条件为 ${flag}：${flag ? "执行 x₁ = 1" : "执行 x₂ = 2"}，Phi 在汇合点选择该分支的值，返回 ${flag ? 1 : 2}。`
            : `The if condition is ${flag}. Phi selects the value from the executed branch and returns ${flag ? 1 : 2}.`
        }
      >
        <defs>
          <marker
            id="phi-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M1 1 9 5 1 9" fill="none" stroke="currentColor" />
          </marker>
        </defs>
        <text x="200" y="32" textAnchor="middle" className={styles.phiCode}>
          if (flag)
        </text>
        <g className={`${styles.phiBranch} ${flag ? styles.phiActive : ""}`}>
          <path d="M184 49 82 91V110" markerEnd="url(#phi-arrow)" />
          <text x="114" y="71" textAnchor="middle">
            true
          </text>
          <text x="82" y="139" textAnchor="middle" className={styles.phiCode}>
            x₁ = 1
          </text>
          <path d="M82 157V175L177 207" markerEnd="url(#phi-arrow)" />
        </g>
        <g className={`${styles.phiBranch} ${!flag ? styles.phiActive : ""}`}>
          <path d="M216 49 318 91V110" markerEnd="url(#phi-arrow)" />
          <text x="286" y="71" textAnchor="middle">
            false / else
          </text>
          <text x="318" y="139" textAnchor="middle" className={styles.phiCode}>
            x₂ = 2
          </text>
          <path d="M318 157V175L223 207" markerEnd="url(#phi-arrow)" />
        </g>
        <text x="200" y="232" textAnchor="middle" className={styles.phiCode}>
          x₃ = φ(x₁, x₂)
        </text>
        <path
          d="M200 244V263"
          className={styles.phiResultLine}
          markerEnd="url(#phi-arrow)"
        />
        <text x="200" y="292" textAnchor="middle" className={styles.phiCode}>
          return x₃ → {flag ? 1 : 2}
        </text>
      </svg>
      <figcaption aria-live="polite">
        <span>FIG. 01 · PHI</span>
        <p>
          {zh
            ? `来自 ${flag ? "true" : "else"} 分支，Phi 选择 ${flag ? "x₁ = 1" : "x₂ = 2"}。`
            : `From the ${flag ? "true" : "else"} branch, Phi selects ${flag ? "x₁ = 1" : "x₂ = 2"}.`}
        </p>
      </figcaption>
    </figure>
  );
}
export default function HomePage({ zh }: { zh: boolean }) {
  const { collectAnchor } = useBrokenLinks();
  ["rules", "technology", "learn", "download", SkipToContentFallbackId].forEach(
    collectAnchor,
  );
  return (
    <div className="academic-site academic-home">
      <Navbar />
      <div className={styles.home}>
        <a
          className={styles.skipToContent}
          href={`#${SkipToContentFallbackId}`}
        >
          {zh ? "跳到主要内容" : "Skip to content"}
        </a>
        <main id={SkipToContentFallbackId}>
          <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.heroInner}>
              <div className={styles.heroMeta}>
                <span>PROGRAM SEMANTICS & SECURITY</span>
                <span>SSA IR · SYNTAXFLOW</span>
              </div>
              <div className={styles.heroGrid}>
                <div className={styles.heroCopy}>
                  <h1 id="hero-title">
                    {zh ? (
                      <>
                        理解程序的语义，
                        <br />
                        发现代码的风险。
                      </>
                    ) : (
                      <>
                        Understand the program.
                        <br />
                        <em>Trace the risk.</em>
                      </>
                    )}
                  </h1>
                  <p>
                    {zh
                      ? "以编译器级静态单赋值中间表示，深入程序的结构与行为；以 SyntaxFlow 规则，将安全分析的思考转化为可检索、可阅读的知识。"
                      : "Explore the structure and behavior of programs through compiler-level static single assignment. With SyntaxFlow, express security analysis as searchable, readable knowledge."}
                  </p>
                  <div className={styles.heroActions}>
                    <Link className={styles.primaryButton} to="#rules">
                      {zh ? "探索规则库" : "Explore the rule catalog"}
                      <ArrowDown size={14} />
                    </Link>
                    <Link className={styles.textLink} to="/docs/intro">
                      {zh ? "阅读使用指南" : "Read the guide"}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
                <AnalysisFigure zh={zh} />
              </div>
              <div className={styles.heroFootnote}>
                <span>
                  {zh
                    ? "面向程序语义的静态安全分析"
                    : "STATIC ANALYSIS THROUGH PROGRAM SEMANTICS"}
                </span>
                <span>Java · Go · PHP · JavaScript · …</span>
              </div>
            </div>
          </section>
          <RulesExplorer zh={zh} />
          <section
            id="technology"
            className={styles.technology}
            aria-labelledby="technology-title"
          >
            <div className={styles.container}>
              <div className={styles.sectionHeader}>
                <div>
                  <span className={styles.eyebrow}>II. FOUNDATIONS</span>
                  <h2 id="technology-title">
                    {zh
                      ? "从语法结构，走向程序语义。"
                      : "From syntax to semantics."}
                  </h2>
                </div>
                <p className={styles.sectionNote}>
                  {zh
                    ? "分析的深度，来自对程序本身的理解。"
                    : "The depth of an analysis begins with an understanding of the program."}
                </p>
              </div>
              <div className={styles.studyGrid}>
                {studies.map((item) => (
                  <article key={item.number} className={styles.study}>
                    <span>{item.number}</span>
                    <h3>{item.title[zh ? 0 : 1]}</h3>
                    <p>{item.description[zh ? 0 : 1]}</p>
                    <Link className={styles.textLink} to={item.to}>
                      {item.link[zh ? 0 : 1]}
                      <ArrowUpRight size={13} />
                    </Link>
                  </article>
                ))}
              </div>
              <div className={styles.queryFeature}>
                <div>
                  <span className={styles.eyebrow}>
                    AN EXAMPLE IN SYNTAXFLOW
                  </span>
                  <h3>
                    {zh
                      ? "让分析过程可以被阅读。"
                      : "An analysis you can read."}
                  </h3>
                  <p>
                    {zh
                      ? "定位一个调用，追踪它的输入，再检视上游的数据来源。简洁的查询，连接起代码中分散的语义。"
                      : "Locate a call, trace its inputs, and inspect the upstream sources. A concise query connects semantics scattered throughout the code."}
                  </p>
                  <Link
                    className={styles.textLink}
                    to="/syntaxflow-guide/quick-start"
                  >
                    {zh ? "理解数据流查询" : "Understanding data flow queries"}
                    <ArrowRight size={14} />
                  </Link>
                </div>
                <figure className={styles.codeFigure}>
                  <figcaption>
                    {zh
                      ? "例 1 · 向上追踪调用参数的数据流"
                      : "Example 1 · Tracing a call argument upstream"}
                  </figcaption>
                  <pre>
                    <code>
                      <span className={styles.codeComment}>
                        //{" "}
                        {zh
                          ? "定位调用并追踪输入来源"
                          : "Locate a call and trace its inputs"}
                      </span>
                      {"\n"}
                      <span className={styles.codeHighlight}>
                        Runtime.getRuntime().exec
                      </span>
                      {"(* #-> * as $source)\n\n"}
                      <span className={styles.codeHighlight}>alert</span>
                      {" $source"}
                    </code>
                  </pre>
                  <div className={styles.codeFigureFoot}>
                    CALL → ARGUMENT → DATA SOURCE
                  </div>
                </figure>
              </div>
            </div>
          </section>
          <section
            id="learn"
            className={styles.learnSection}
            aria-labelledby="learn-title"
          >
            <div className={styles.container}>
              <div className={styles.readingLayout}>
                <div>
                  <span className={styles.eyebrow}>
                    III. READING & REFERENCE
                  </span>
                  <h2 id="learn-title">
                    {zh ? (
                      <>
                        实践与原理，
                        <br />
                        相互印证。
                      </>
                    ) : (
                      <>
                        Practice, informed
                        <br />
                        by theory.
                      </>
                    )}
                  </h2>
                  <p>
                    {zh
                      ? "从工具使用到语言设计，从一次查询到对分析引擎的理解。循序阅读，逐步深入。"
                      : "From using a tool to understanding its language and engine. A path from practical queries to the principles behind them."}
                  </p>
                </div>
                <div className={styles.readingList}>
                  {readings.map((item) => (
                    <Link key={item.number} to={item.to}>
                      <span className={styles.readingNumber}>
                        [{item.number}]
                      </span>
                      <div>
                        <small>{item.tag}</small>
                        <h3>{item.label[zh ? 0 : 1]}</h3>
                        <p>{item.body[zh ? 0 : 1]}</p>
                      </div>
                      <ArrowUpRight size={18} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <Downloads zh={zh} />
        </main>
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerTop}>
              <div>
                <span className={styles.footerBrand}>ssa.to</span>
                <p>
                  {zh
                    ? "程序分析，始于对语义的理解。"
                    : "Program analysis begins with semantics."}
                </p>
              </div>
              <div>
                <span>YAK PROJECT</span>
                <a href="https://yaklang.io" target="_blank" rel="noreferrer">
                  yaklang.io
                  <ArrowUpRight size={13} />
                </a>
                <a href="https://yaklang.com" target="_blank" rel="noreferrer">
                  yaklang.com
                  <ArrowUpRight size={13} />
                </a>
              </div>
              <div>
                <span>{zh ? "开源与社区" : "OPEN SOURCE & COMMUNITY"}</span>
                <a
                  href="https://github.com/yaklang/yaklang"
                  target="_blank"
                  rel="noreferrer"
                >
                  Yaklang / GitHub
                  <ArrowUpRight size={13} />
                </a>
                <Link to="/docs/community">
                  {zh ? "参与社区" : "Join the community"}
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <span>© {new Date().getFullYear()} SSA.to · Yak Project</span>
              <Link to="/docs/intro">
                {zh ? "阅读文档" : "Read the documentation"}
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
