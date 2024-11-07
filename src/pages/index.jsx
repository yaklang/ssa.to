import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import clsx from "clsx";
import {OutlineArrowrightIcon} from "@site/src/assets/icons/outline";
import codeAnalysis from "@site/static/img/code-analysis-bg.png";
import codeAnalysisRightBottom from "@site/static/img/code-analysis-right-bottom.png";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

  
function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();

    const isZh = (siteConfig.i18n.currentLocale || siteConfig.i18n.defaultLocale) === "zh";

    return (
        <div className={styles["heroBanner"]}>
            <div className="container">
                {
                    isZh ? <>
                        <h1>
                            <div className={styles["title-text_1"]}>先 编译</div>
                            <div className={styles["title-text_2"]}>SSA IR</div>
                            <div className={styles["title-text_1"]}>再 深度扫描安全漏洞</div>
                        </h1>

                    </> : <>
                        <h1>
                            <div className={styles["title-text_1"]}>Empower</div>
                            <div className={styles["title-text_2"]}>{siteConfig.title}</div>
                            <div className={styles["title-text_3"]}>Code Analysis</div>
                        </h1>
                    </>
                }

                <h2 className={styles["title_subtitle"]}>{siteConfig.tagline}</h2>
                <div className={styles["more-buttons"]}>
                    <Link to="/codeAnalysis" target="_blank">
                        <div className={clsx(styles["more-btn"], styles["start-for-free"])}>
                            {isZh ? "免费开始" : "Start for free"}
                        </div>
                    </Link>
                    <Link to="/docs/intro">
                        <div className={clsx(styles["more-btn"], styles["know-more"])}>
                            {isZh ? "了解更多" : "Know more"}
                            <OutlineArrowrightIcon className={styles["right-icon"]}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

const FeatureList = [
    {
        title: isZh => isZh ? "多语言支持" : "Multiple Languages Supported",
        img: require("@site/static/img/MultipleLanguagesSupported.png").default,
        description: isZh => isZh ? (
            <>
                编译系统支持多种编程语言，包括 Yaklang、
                JavaScript(ES)、Java、PHP 等。
                <br/>
                支持标准的 eBNF g4 语法文件。
            </>
        ) : (
            <>
                Compiling System Support multiple languages, including Yaklang,
                JavaScript(ES), Java, PHP and more.
                <br/>
                Standard eBNF g4 grammar file is supported.
            </>
        ),
    },
    {
        title: isZh => isZh ? "先进的分析技术" : "Advanced Analysis Techniques",
        img: require("@site/static/img/AdvancedAnalysisTechniques.png").default,
        description: isZh => isZh ? (
            <>
                在 SSA 形式下，我们支持多种先进的分析技术：
                <ul>
                    <li>上下文敏感的跨函数分析</li>
                    <li>数据流分析</li>
                    <li>控制流分析</li>
                    <li>使用-定义链：自底向上和自顶向下分析</li>
                    <li>调用栈上下文分析等</li>
                </ul>
            </>
        ) : (
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
        title: isZh => isZh ? "IR 数据库与分析规则" : "IR-Database and Analysis Rule",
        img: require("@site/static/img/IR-DatabaseandAnalysisRule.png").default,
        description: (isZh => isZh ? (
            <>
                SSA 形式提供了强大的 IR 数据库和可视化工具，{" "}
                <br/>
                帮助您理解代码结构并分析代码质量。
                <br/>
                使用 SyntaxFlow 定义您自己的代码分析规则。
            </>
        ) : (
            <>
                SSA formal provides a powerful IR-Database and Visualization tool,{" "}
                <br/>
                which can help you to understand the code structure and analyze the code
                quality.
                <br/>
                use SyntaxFlow to define your own
                code analysis rules.
            </>
        )),
    },
];

function Feature({img, title, description}) {
    const {siteConfig} = useDocusaurusContext();
    const isZh = (siteConfig.i18n.currentLocale || siteConfig.i18n.defaultLocale) === "zh";

    return (
        <div className={clsx("col col--4", styles["feature-item"])}>
            <div className="text--center">
                <img src={img} width={200}/>
            </div>
            <h3 className={styles["feature-title"]}>{title(isZh)}</h3>
            <div className={styles["feature-desc"]}>{description(isZh)}</div>
        </div>
    );
}

// fetch from https://aliyun-oss.yaklang.com/yak/latest/syntaxflow-meta.json
// create a table
function SyntaxFlowTable() {
    const [data, setData] = useState([]);
    const [version, setVersion] = useState("");
    const [activeTab, setActiveTab] = useState("java");
    const [languages, setLanguages] = useState([]);
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        axios.get("https://aliyun-oss.yaklang.com/yak/latest/syntaxflow-meta.json").then(res => {
            try {
                setVersion(res.data.version)
                const rules = res.data.rules.sort((a, b) => b.score - a.score)
                
                // 提取所有语言
                const langs = new Set();
                rules.forEach(rule => {
                    const lang = rule.rule.split("-")[0];
                    if(lang && lang !== "sca") {
                        langs.add(lang);
                    }
                });
                setLanguages(Array.from(langs));
                
                // 生成tabs
                const newTabs = [
                    { key: "sca", label: "SCA 规则（版本检查）" },
                    ...Array.from(langs).map(lang => ({
                        key: lang,
                        label: `${lang.toUpperCase()} 语言规则`
                    }))
                ];
                setTabs(newTabs);
                setData(rules);
                
                // 如果当前activeTab不在新的tabs中，设置为第一个tab
                if(!newTabs.find(tab => tab.key === activeTab)) {
                    setActiveTab(newTabs[0].key);
                }
                
            } catch (err) {
                console.error(err)
            }
        }).catch(err => {
            console.error(err)
        })
    }, [])

    const getFilteredData = (tabKey) => {
        if(tabKey === "sca") {
            return data.filter(item => item.rule.includes("-sca-"));
        } else {
            return data.filter(item => 
                item.rule.startsWith(`${tabKey}-`) && !item.rule.includes("-sca-")
            );
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '1200px',
                borderBottom: '1px solid #eee',
                marginBottom: '20px'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                    justifyContent: 'center'
                }}>
                    {tabs.map(tab => (
                        <div
                            key={tab.key}
                            style={{
                                padding: '8px 16px',
                                cursor: 'pointer',
                                backgroundColor: activeTab === tab.key ? '#EDE9FE' : 'transparent',
                                color: activeTab === tab.key ? '#6D28D9' : '#666',
                                fontWeight: activeTab === tab.key ? 600 : 400,
                                fontSize: '14px',
                                transition: 'all 0.2s',
                                display: 'inline-block',
                                margin: '0 4px',
                                borderRadius: '8px',
                                boxShadow: activeTab === tab.key ? '0 2px 4px rgba(139, 92, 246, 0.1)' : 'none'
                            }}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {tab.label}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ width: '100%', maxWidth: '1200px' }}>
                <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    tableLayout: 'fixed'
                }}>
                    <thead>
                        <tr>
                            <th style={{
                                width: '320px',
                                maxWidth: '320px',
                                padding: '12px',
                                backgroundColor: '#EDE9FE',
                                borderBottom: '1px solid #ddd',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                color: '#6D28D9'
                            }}>规则名</th>
                            <th style={{
                                width: '550px',
                                maxWidth: '550px',
                                padding: '12px',
                                backgroundColor: '#EDE9FE',
                                borderBottom: '1px solid #ddd',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                color: '#6D28D9'
                            }}>规则功能</th>
                            <th style={{
                                padding: '12px',
                                backgroundColor: '#EDE9FE',
                                borderBottom: '1px solid #ddd',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                color: '#6D28D9'
                            }}>是否是库规则</th>
                            <th style={{
                                padding: '12px',
                                backgroundColor: '#EDE9FE',
                                borderBottom: '1px solid #ddd',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                color: '#6D28D9'
                            }}>威胁评分</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getFilteredData(activeTab).map((item, index) => (
                            <tr key={index} style={{
                                backgroundColor: index % 2 === 0 ? 'white' : '#F5F3FF'
                            }}>
                                <td style={{
                                    width: '320px',
                                    maxWidth: '320px',
                                    padding: '12px',
                                    borderBottom: '1px solid #ddd',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    cursor: 'pointer'
                                }} title={item.rule}>{item.rule}</td>
                                <td style={{
                                    width: '550px',
                                    maxWidth: '550px',
                                    padding: '12px',
                                    borderBottom: '1px solid #ddd',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    cursor: 'pointer'
                                }} title={item.detail}>{item.detail}</td>
                                <td style={{
                                    padding: '12px',
                                    borderBottom: '1px solid #ddd',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>{item.is_lib ? "是" : "否"}</td>
                                <td style={{
                                    padding: '12px',
                                    borderBottom: '1px solid #ddd',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    color: item.score > 8 ? '#DC2626' : 'inherit',
                                    fontWeight: item.score > 8 ? 'bold' : 'normal'
                                }}>{item.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
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
                    SyntaxFlow 已支持的规则列表
                </h2>
                <SyntaxFlowTable/>
            </div>
            <div className={styles["code-analysis"]}>
                <h2 className={styles["code-analysis-title"]}>
                    Advanced Analysis Techniques
                </h2>
                <div className={styles["code-analysis-cont"]}>
                    <img src={codeAnalysis} width={"100%"}/>
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
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader/>
            <HomepageFeatures/>
        </Layout>
    );
}
