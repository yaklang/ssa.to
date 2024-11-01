import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { OutlineArrowrightIcon } from "@site/src/assets/icons/outline";
import codeAnalysis from "@site/static/img/code-analysis-bg.png";
import codeAnalysisRightBottom from "@site/static/img/code-analysis-right-bottom.png";
import styles from "./index.module.scss";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={styles["heroBanner"]}>
      <div className="container">
        <h1>
          <div className={styles["title-text_1"]}>Empower</div>
          <div className={styles["title-text_2"]}>{siteConfig.title}</div>
          <div className={styles["title-text_3"]}>Code Analysis</div>
        </h1>
        <h2 className={styles["title_subtitle"]}>{siteConfig.tagline}</h2>
        <div className={styles["more-buttons"]}>
          <Link to="/codeAnalysis" target="_blank">
            <div className={clsx(styles["more-btn"], styles["start-for-free"])}>
              Start for free
            </div>
          </Link>
          <Link to="/docs/intro">
            <div className={clsx(styles["more-btn"], styles["know-more"])}>
              Know more
              <OutlineArrowrightIcon className={styles["right-icon"]} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

const FeatureList = [
  {
    title: "Multiple Languages Supported",
    img: require("@site/static/img/MultipleLanguagesSupported.png").default,
    description: (
      <>
        Compiling System Support multiple languages, including Yaklang,
        JavaScript(ES), Java, PHP and more.
        <br />
        Standard eBNF g4 grammar file is supported.
      </>
    ),
  },
  {
    title: "Advanced Analysis Techniques",
    img: require("@site/static/img/AdvancedAnalysisTechniques.png").default,
    description: (
      <>
        In the SSA formal, we support a variety of advanced analysis techniques:
        <ul>
          <li>Context Sensitive Cross-Function Analysis</li>
          <li>Data-Flow Analysis</li>
          <li>Control-Flow Analysis</li>
          <li>Use-Def Chain: Bottom-Up and Top-Down Analysis</li>
          <li>Call Stack Context Analysis and more.</li>
        </ul>
      </>
    ),
  },
  {
    title: "IR-Database and Analysis Rule",
    img: require("@site/static/img/IR-DatabaseandAnalysisRule.png").default,
    description: (
      <>
        SSA formal provides a powerful IR-Database and Visualization tool,{" "}
        <br />
        which can help you to understand the code structure and analyze the code
        quality.
        <br />
        Even you can use the Rule System (SyntaxFlow: TBD) to define your own
        code analysis rules.
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx("col col--4", styles["feature-item"])}>
      <div className="text--center">
        <img src={img} width={200} />
      </div>
      <h3 className={styles["feature-title"]}>{title}</h3>
      <div className={styles["feature-desc"]}>{description}</div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <div className={clsx("container", styles["feature-wrapper"])}>
      <div className={clsx("row", styles["feature"])}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
      <div className={styles["code-analysis"]}>
        <h2 className={styles["code-analysis-title"]}>
          Advanced Analysis Techniques
        </h2>
        <div className={styles["code-analysis-cont"]}>
          <img src={codeAnalysis} width={"100%"} />
          <div className={styles["start-for-free-wrapper"]}>
            <Link to="/codeAnalysis" target="_blank">
              <div
                className={clsx(
                  styles["start-for-free"],
                  styles["animation-btn"],
                  styles["animation-btn-white"]
                )}
              >
                Start for free
              </div>
            </Link>
          </div>
          <img
            src={codeAnalysisRightBottom}
            className={styles["codeAnalysisRightBottom"]}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <HomepageFeatures />
    </Layout>
  );
}
