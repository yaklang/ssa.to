import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import {
  ArrowUpRight,
  Download,
  Monitor,
  RefreshCw,
  Terminal,
} from "lucide-react";
import styles from "./home.module.scss";
const platforms = [
  { name: "macOS", arch: "Apple Silicon", file: "darwin-arm64.dmg" },
  { name: "macOS", arch: "Intel", file: "darwin-x64.dmg" },
  { name: "Windows", arch: "x64", file: "windows-amd64.exe" },
  { name: "Linux", arch: "x64 · AppImage", file: "linux-amd64.AppImage" },
  { name: "Linux", arch: "ARM64 · AppImage", file: "linux-arm64.AppImage" },
];
const legacy = [
  { name: "Windows 7 · x64", file: "windows-legacy-amd64.exe" },
  { name: "Linux · x64", file: "linux-legacy-amd64.AppImage" },
  { name: "Linux · ARM64", file: "linux-legacy-arm64.AppImage" },
  { name: "macOS · Intel", file: "darwin-legacy-x64.dmg" },
  { name: "macOS · Apple Silicon", file: "darwin-legacy-arm64.dmg" },
];
export default function Downloads({ zh }: { zh: boolean }) {
  const [version, setVersion] = useState("");
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");
    fetch("https://oss-qn.yaklang.com/irify/latest/yakit-version.txt", {
      signal: AbortSignal.any([controller.signal, AbortSignal.timeout(12000)]),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Version unavailable");
        return res.text();
      })
      .then((text) => {
        const value = text.trim().split("\n")[0].trim();
        if (!/^[\w.-]+$/.test(value)) throw new Error("Invalid version");
        if (!controller.signal.aborted) {
          setVersion(value);
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!controller.signal.aborted) setStatus("error");
      });
    return () => controller.abort();
  }, [attempt]);
  const url = (file: string) =>
    `https://oss-qn.yaklang.com/irify/${version}/IRify-${version}-${file}`;
  return (
    <section
      id="download"
      className={styles.downloadSection}
      aria-labelledby="download-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow}>IV. TOOLS FOR PRACTICE</span>
            <h2 id="download-title">
              {zh ? "以工具，展开实践。" : "An instrument for exploration."}
            </h2>
            <p>
              {zh
                ? "IRify 将代码扫描与规则分析带入图形工作环境。"
                : "IRify brings code scanning and rule analysis into a graphical workspace."}
            </p>
          </div>
          <span className={styles.releaseVersion} role="status">
            {status === "ready"
              ? `IRify / ${version}`
              : status === "loading"
                ? zh
                  ? "获取最新版本…"
                  : "Fetching latest release…"
                : zh
                  ? "版本信息暂不可用"
                  : "Release unavailable"}
          </span>
        </div>
        {status === "error" && (
          <div className={styles.downloadError} role="alert">
            <span>
              {zh
                ? "下载源暂时无法连接，请重试。"
                : "The download server is unavailable. Please retry."}
            </span>
            <button
              className={styles.smallButton}
              onClick={() => setAttempt((a) => a + 1)}
            >
              <RefreshCw size={14} />
              {zh ? "重试" : "Retry"}
            </button>
          </div>
        )}
        <div className={styles.downloadGrid}>
          {platforms.map((platform) => (
            <div key={platform.file} className={styles.downloadCard}>
              {platform.name === "Linux" ? (
                <Terminal size={25} />
              ) : (
                <Monitor size={25} />
              )}
              <h3>{platform.name}</h3>
              <p>{platform.arch}</p>
              {status === "ready" ? (
                <a className={styles.downloadLink} href={url(platform.file)}>
                  {zh ? "下载" : "Download"}
                  <Download size={16} />
                </a>
              ) : (
                <button className={styles.downloadLink} disabled>
                  {zh ? "等待版本信息" : "Awaiting release"}
                </button>
              )}
            </div>
          ))}
        </div>
        <div className={styles.downloadBottom}>
          <details>
            <summary>{zh ? "需要兼容版本？" : "Need a legacy build?"}</summary>
            <div className={styles.legacyLinks}>
              {legacy.map((item) =>
                status === "ready" ? (
                  <a key={item.file} href={url(item.file)}>
                    {item.name}
                    <Download size={13} />
                  </a>
                ) : (
                  <span key={item.file}>{item.name}</span>
                ),
              )}
            </div>
          </details>
          <Link className={styles.textLink} to="/docs/intro">
            {zh ? "安装与使用指南" : "Installation guide"}
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <p className={styles.licenseNote}>
          {zh
            ? "SyntaxFlow 技术目前仅供技术交流使用。IRify 商业使用及授权二次开发，请联系 Yak Project。"
            : "SyntaxFlow is currently for technical exchange. Contact Yak Project for commercial IRify use and authorized development."}
        </p>
      </div>
    </section>
  );
}
