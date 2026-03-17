import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import clsx from "clsx";
import {OutlineArrowrightIcon} from "@site/src/assets/icons/outline";
import codeAnalysis from "@site/static/img/code-analysis-bg.png";
import codeAnalysisRightBottom from "@site/static/img/code-analysis-right-bottom.png";
import 'katex/dist/katex.min.css';
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import TextScramble from "@site/src/components/TextScramble";
import classNames from "classnames"
import {
    AppleIcon,
    DownloadIcon,
    LinuxIcon,
    WindowsIcon,
  } from "../assets/HomeIcon";
  import {
    useMemoizedFn,
  } from "ahooks";
  import { Dropdown, Menu, message } from "antd";
  
function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();

    const isZh = (siteConfig.i18n.currentLocale || siteConfig.i18n.defaultLocale) === "zh";

    return (
        <div className={styles["heroBanner"]}>
            <div className="container">
                {
                    isZh ? <>
                        <h1>
                            <div className={styles["title-text_1"]}>编译器级</div>
                            <div className={styles["title-text_2"]}>SSA IR</div>
                            <div className={styles["title-text_1"]}>代码扫描技术</div>
                        </h1>

                    </> : <>
                        <h1>
                            <div className={styles["title-text_1"]}>Empower</div>
                            <div className={styles["title-text_2"]}>{siteConfig.title}</div>
                            <div className={styles["title-text_3"]}>Code Analysis</div>
                        </h1>
                    </>
                }

                <h2 className={styles["title_subtitle"]}>
                    <TextScramble text={siteConfig.tagline} />
                </h2>
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
        title: isZh => isZh ? "多语言多框架技术支持" : "Multiple Languages Supported",
        img: require("@site/static/img/MultipleLanguagesSupported.png").default,
        description: isZh => isZh ? (
            <>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <span style={{color: '#6366f1', marginRight: '8px'}}>🔧</span>
                    <span>编译系统支持<strong style={{color: '#4f46e5'}}>多种编程语言</strong>及其生态系统：</span>
                </div>
                <div style={{marginLeft: '24px', color: '#4b5563'}}>
                    <span style={{color: '#ef4444'}}>Java <i className="devicon-java-plain colored"></i></span> 系列
                    <span style={{color: '#6b7280'}}>(包含 Freemarker、SpEL、EL、JSP 等子语言)</span>、
                    <span style={{color: '#3b82f6'}}>Golang <i className="devicon-go-original-wordmark colored"></i></span>、
                    <span style={{color: '#8b5cf6'}}>PHP <i className="devicon-php-plain colored"></i></span>、
                    <span style={{color: '#f59e0b'}}>JavaScript/EcmaScript <i className="devicon-javascript-plain colored"></i></span> 等，
                    兼容各语言的主流版本。
                </div>
                <br/>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <span style={{color: '#10b981', marginRight: '8px'}}>✨</span>
                    <span>深度支持 <strong style={{color: '#059669'}}>SpringBoot <i className="devicon-spring-plain colored"></i></strong> 等常见 Java 开发框架，基于标准 eBNF g4 语法文件构建。</span>
                </div>
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
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <span style={{color: '#6366f1', marginRight: '8px'}}>🔍</span>
                    <span>基于<strong style={{color: '#4f46e5'}}>静态单赋值(SSA)</strong>形式，实现了一系列先进分析技术：</span>
                </div>
                <div style={{marginLeft: '24px', color: '#4b5563'}}>
                    <div style={{marginBottom: '4px'}}><span style={{color: '#3b82f6'}}>• 双向数据流分析</span>：基于 Phi 函数，支持自顶向下和自底向上的完整分析链路</div>
                    <div style={{marginBottom: '4px'}}><span style={{color: '#8b5cf6'}}>• 全局分析能力</span>：支持跨包/跨文件分析，具备路径敏感的遍历优化</div>
                    <div style={{marginBottom: '4px'}}><span style={{color: '#ef4444'}}>• 深度关联分析</span>：数据流与控制流图(CFG)的深度结合</div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginTop: '8px'}}>
                    <span style={{color: '#10b981', marginRight: '8px'}}>✨</span>
                    <span>提供<strong style={{color: '#059669'}}>面向对象程序的闭包分析</strong>与上下文敏感的过程间分析</span>
                </div>
            </>
        ) : (
            <>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <span style={{color: '#6366f1', marginRight: '8px'}}>🔍</span>
                    <span>Based on <strong style={{color: '#4f46e5'}}>Static Single Assignment (SSA)</strong>, we provide advanced analysis techniques:</span>
                </div>
                <div style={{marginLeft: '24px', color: '#4b5563'}}>
                    <div style={{marginBottom: '4px'}}><span style={{color: '#3b82f6'}}>• Bidirectional Data Flow Analysis</span>: Complete analysis chain based on Phi functions</div>
                    <div style={{marginBottom: '4px'}}><span style={{color: '#8b5cf6'}}>• Global Analysis</span>: Cross-package/file analysis with path-sensitive optimization</div>
                    <div style={{marginBottom: '4px'}}><span style={{color: '#ef4444'}}>• Deep Correlation Analysis</span>: Integration of data flow and control flow graphs (CFG)</div>
                </div>
            </>
        ),
    },
    {
        title: isZh => isZh ? "IR 数据库与分析规则" : "IR Database & Analysis Rules",
        img: require("@site/static/img/IR-DatabaseandAnalysisRule.png").default,
        description: isZh => isZh ? (
            <>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <span style={{color: '#6366f1', marginRight: '8px'}}>💾</span>
                    <span>采用 <strong style={{color: '#4f46e5'}}>SQLite 结构化存储</strong>，支持懒加载与懒存储机制：</span>
                </div>
                <div style={{marginLeft: '24px', color: '#4b5563'}}>
                    <div style={{marginBottom: '4px'}}><span style={{color: '#3b82f6'}}>• 高性能数据库</span>：优化的存储结构确保分析性能</div>
                    <div style={{marginBottom: '4px'}}><span style={{color: '#8b5cf6'}}>• SyntaxFlow 分析语言</span>：直接对 IR 编译产物进行扫描</div>
                    <div style={{marginBottom: '4px'}}><span style={{color: '#ef4444'}}>• 规则编写系统</span>：将分析经验转化为可复用规则</div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginTop: '8px'}}>
                    <span style={{color: '#10b981', marginRight: '8px'}}>📚</span>
                    <span>查看 <a href="https://ssa.to/cookbook" style={{color: '#059669'}}>技术文档</a> 了解详细使用方法</span>
                </div>
            </>
        ) : (
            <>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <span style={{color: '#6366f1', marginRight: '8px'}}>💾</span>
                    <span>Using <strong style={{color: '#4f46e5'}}>SQLite structured storage</strong> with lazy loading mechanism:</span>
                </div>
                <div style={{marginLeft: '24px', color: '#4b5563'}}>
                    <div style={{marginBottom: '4px'}}><span style={{color: '#3b82f6'}}>• High-performance Database</span>: Optimized storage for analysis</div>
                    <div style={{marginBottom: '4px'}}><span style={{color: '#8b5cf6'}}>• SyntaxFlow Language</span>: Direct IR compilation analysis</div>
                    <div style={{marginBottom: '4px'}}><span style={{color: '#ef4444'}}>• Rule Writing System</span>: Convert analysis experience into reusable rules</div>
                </div>
            </>
        ),
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

// 筛选掉不符合限制的数据 并输出
function judgeData(rules) {
    const itemType = {
      code: "string",
      detail: "string",
      detail_en: "string",
      is_lib: "boolean",
      language: "string",
      rule: "string",
      score: "number",
      sha256: "string",
    }
    let pass = []
    let error = []
    rules.forEach((item)=>{
      let isPass = true
      try {
        Object.keys(item).forEach(key => {
        if(itemType[key] && typeof item[key] !== itemType[key]){
          isPass = false
        }
      });
      } catch (error) {
        isPass = false
      }
      if(isPass){
        pass.push(item)
      }
      else{
        error.push(item)
      }
    })
    console.error(`数据错误排除项：${JSON.stringify(error)}`)
    return pass
}

// fetch from https://aliyun-oss.yaklang.com/yak/latest/syntaxflow-meta.json
// create a table
function SyntaxFlowTable() {
    const [data, setData] = useState([]);
    const [currentVersion, setCurrentVersion] = useState("");
    const [version, setVersion] = useState("");
    const [activeTab, setActiveTab] = useState("java");
    const [languages, setLanguages] = useState([]);
    const [tabs, setTabs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        // 首先获取版本信息
        axios.get("https://aliyun-oss.yaklang.com/yak/latest/version.txt")
            .then(res => {
                const version = res.data.trim();
                setCurrentVersion(version);
                
                // 尝试使用具体版本加载数据
                return axios.get(`https://aliyun-oss.yaklang.com/yak/${version}/syntaxflow-meta.json`)
                    .catch(() => {
                        // 如果加载失败,回退到latest
                        console.log("Failed to load specific version, falling back to latest");
                        return axios.get("https://aliyun-oss.yaklang.com/yak/latest/syntaxflow-meta.json");
                    });
            })
            .then(res => {
                try {
                    setVersion(res.data.version);
                    const judgeRule = judgeData(res.data.rules)
                    const rules = judgeRule.filter((item)=> typeof item === "object").sort((a, b) => b.score - a.score);
                    // 提取所有语言
                    const langs = new Set();
                    rules.forEach(rule => {
                        const lang = rule.language 
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
                    console.error(err);
                }
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    const getFilteredData = (tabKey) => {
        if(tabKey === "version") {
            return data;
        } else if(tabKey === "sca") {
            return data.filter(item => item.rule.includes("sca") || item.rule.includes("SCA"));
        } else {
            return data.filter(item => 
                item.language == tabKey 
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
                marginBottom: '2px'
            }}>
                <div style={{
                width: '100%',
                overflowX: 'auto'
              }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                width: 'max-content',
                minWidth: '100%',
                whiteSpace: 'nowrap',
                justifyContent: 'center'
                }}>
                    <div
                        style={{
                            padding: '8px 16px',
                            cursor: 'pointer', 
                            backgroundColor: activeTab === 'version' ? '#EDE9FE' : 'transparent',
                            color: activeTab === 'version' ? '#6D28D9' : '#666',
                            fontWeight: activeTab === 'version' ? 600 : 400,
                            fontSize: '14px',
                            transition: 'all 0.2s',
                            display: 'inline-block',
                            margin: '0 4px', 
                            borderRadius: '8px',
                            boxShadow: activeTab === 'version' ? '0 2px 4px rgba(139, 92, 246, 0.1)' : 'none',
                            animation: activeTab === 'version' ? 'none' : 'bounce 1s ease infinite'
                        }}
                        onClick={() => setActiveTab('version')}
                    >
                        <span>
                            {version || ' - '}
                            <span style={{
                                backgroundColor: '#6D28D9',
                                color: '#fff',
                                padding: '2px 6px',
                                borderRadius: '12px',
                                fontSize: '12px',
                                marginLeft: '6px'
                            }}>
                                {data.length}
                            </span>
                        </span>
                    </div>
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
                            <span>{tab.label}</span>
                            <span style={{
                                backgroundColor: activeTab === tab.key ? '#6D28D9' : '#E5E7EB',
                                color: activeTab === tab.key ? '#fff' : '#666',
                                padding: '2px 6px',
                                borderRadius: '12px',
                                fontSize: '12px',
                                marginLeft: '6px'
                            }}>
                                {getFilteredData(tab.key).length}
                            </span>
                        </div>
                    ))}
                        </div>
                </div>
            </div>

            <div style={{ width: '100%', maxWidth: '1200px' }}>
                <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    tableLayout: 'fixed'
                }}>
                    <div style={{
                        padding: '12px 0',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        width: '100%',
                        maxWidth: '1200px'
                    }}>
                        <input
                            type="search"
                            placeholder="搜索规则名称、功能..."
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '2px solid transparent',
                                borderImage: 'linear-gradient(90deg, #8B5CF6 0%, #A78BFA 10%, #C4B5FD 30%, transparent 100%)',
                                borderImageSlice: 1,
                                borderRadius: '8px',
                                fontSize: '14px',
                                color: '#374151',
                                outline: 'none',
                                transition: 'all 0.2s',
                                background: 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0) 100%)',
                                '&:focus': {
                                    borderImage: 'linear-gradient(90deg, #7C3AED 0%, #8B5CF6 30%, #A78BFA 60%, transparent 100%)',
                                    borderImageSlice: 1,
                                    boxShadow: '0 0 0 2px rgba(139, 92, 246, 0.1)'
                                }
                            }}
                            onChange={(e) => {
                                // 这里需要添加搜索逻辑
                                const searchValue = e.target.value.toLowerCase();
                                // 假设有一个 setSearchTerm 状态更新函数
                                setSearch(searchValue);
                            }}
                        />
                    </div>
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
                        {(() => {
                            const [expandedRow, setExpandedRow] = useState(null);
                            const [hoveredRow, setHoveredRow] = useState(null);

                            return getFilteredData(activeTab)
                                .filter(item => 
                                    item.rule.toLowerCase().includes(search) ||
                                    item.detail.toLowerCase().includes(search) ||
                                    (item.code && item.code.toLowerCase().includes(search))
                                )
                                .map((item, index) => (
                                <>
                                    <tr 
                                        key={index} 
                                        onClick={() => setExpandedRow(expandedRow === index ? null : index)}
                                        onMouseEnter={() => setHoveredRow(index)}
                                        onMouseLeave={() => setHoveredRow(null)}
                                        style={{
                                            backgroundColor: hoveredRow === index ? '#DDD6FE' : 
                                                           index % 2 === 0 ? 'white' : '#F5F3FF',
                                            cursor: 'pointer',
                                            transition: 'background-color 0.3s'
                                        }}
                                    >
                                        <td style={{
                                            width: '320px',
                                            maxWidth: '320px',
                                            padding: '12px',
                                            borderBottom: '1px solid #ddd',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }} title={item.rule}>{item.rule}</td>
                                        <td style={{
                                            width: '550px',
                                            maxWidth: '550px',
                                            padding: '12px',
                                            borderBottom: '1px solid #ddd',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
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
                                    {expandedRow === index && (
                                        <tr>
                                            <td colSpan={4} style={{
                                                padding: expandedRow === index ? '20px' : '0px',
                                                backgroundColor: '#F5F3FF',
                                                borderBottom: '1px solid #ddd',
                                                transition: 'all 0.3s ease-in-out',
                                                maxHeight: expandedRow === index ? '500px' : '0px',
                                                overflow: 'hidden'
                                            }}>
                                                <div style={{
                                                    whiteSpace: 'normal',
                                                    opacity: expandedRow === index ? 1 : 0,
                                                    transform: `translateY(${expandedRow === index ? '0' : '-20px'})`,
                                                    transition: 'all 0.3s ease-in-out'
                                                }}>
                                                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                                                        <h4 style={{margin: 0, color: '#6B46C1'}}>SyntaxFlow 规则代码</h4>
                                                        <span style={{
                                                            marginLeft: '8px',
                                                            padding: '2px 8px',
                                                            fontSize: '12px',
                                                            backgroundColor: '#E9D5FF',
                                                            color: '#7E22CE',
                                                            borderRadius: '4px',
                                                            fontWeight: 'bold'
                                                        }}>
                                                            {item.language || (() => {
                                                                const firstWord = item.rule.split('-')[0].toLowerCase();
                                                                return languages.includes(firstWord) ? firstWord.toUpperCase() : 'Unknown';
                                                            })()}
                                                        </span>
                                                    </div>
                                                    <div className="code-block-wrapper" style={{position: 'relative'}}>
                                                        <pre style={{
                                                            background: '#F3E8FF',
                                                            padding: '20px',
                                                            paddingRight: '80px', // 为复制按钮留出空间
                                                            borderRadius: '8px',
                                                            color: '#581C87',
                                                            overflow: 'auto',
                                                            margin: '0',
                                                            maxWidth: '880px',
                                                            maxHeight: '880px',
                                                            boxShadow: '0 4px 6px rgba(139, 92, 246, 0.15)',
                                                            border: '1px solid #C084FC',
                                                            wordWrap: 'break-word',
                                                            whiteSpace: 'pre-wrap',
                                                            position: 'relative' // 为复制按钮定位
                                                        }}>
                                                            <button 
                                                                onClick={() => {
                                                                    if(item?.code) {
                                                                        navigator.clipboard.writeText(item.code)
                                                                    }
                                                                }}
                                                                disabled={!item?.code}
                                                                style={{
                                                                    position: 'absolute',
                                                                    right: '12px', 
                                                                    top: '12px',
                                                                    padding: '4px 12px',
                                                                    background: item?.code ? 'rgba(139, 92, 246, 0.1)' : '#eee',
                                                                    color: item?.code ? '#6D28D9' : '#999',
                                                                    border: `1px solid ${item?.code ? 'rgba(139, 92, 246, 0.2)' : '#ddd'}`,
                                                                    borderRadius: '6px',
                                                                    cursor: item?.code ? 'pointer' : 'not-allowed',
                                                                    fontSize: '13px',
                                                                    transition: 'all 0.2s ease',
                                                                    zIndex: 100
                                                                }}
                                                                onMouseOver={(e) => {
                                                                    if(item?.code) {
                                                                        e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
                                                                        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                                                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                                                    }
                                                                }}
                                                                onMouseOut={(e) => {
                                                                    if(item?.code) {
                                                                        e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                                                                        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                                                                        e.currentTarget.style.transform = 'none';
                                                                    }
                                                                }}
                                                            >
                                                                复制
                                                            </button>
                                                            <code style={{
                                                                color: '#6D28D9',
                                                                fontSize: '14px',
                                                                lineHeight: '1.6',
                                                                fontFamily: 'monospace'
                                                            }}>{item?.code || item?.detail || '暂无内容'}</code>
                                                        </pre>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </>
                            ))
                        })()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HomepageFeatures() {
    const [legacyVisible, setLegacyVisible] = useState(false);
    const [version, setVersion] = useState("");
    const [macOSIntel, setMacOSIntel] = useState({
        key: "macOS (Intel)",
        url: "darwin-x64.dmg",
        size: 0,
      });
      const [macOSAppleSillion, setMacOSAppleSillion] = useState({
        key: "macOS (Apple Silicon)",
        url: "darwin-arm64.dmg",
        size: 0,
      });
      const [Linux, setLinux] = useState({
        key: "Linux",
        url: "linux-amd64.AppImage",
        size: 0,
      });
      const [Windows, setWindows] = useState({
        key: "Windows",
        url: "windows-amd64.exe",
        size: 0,
      });
      const [LinuxArm64, setLinuxArm64] = useState({
        key: "Linux (Arm64)",
        url: "linux-arm64.AppImage",
        size: 0,
      });
    useEffect(() => {
        init();
      }, []);
      const init = useMemoizedFn(() => {
        axios
          .get(
            "https://oss-qn.yaklang.com/irify/latest/yakit-version.txt"
          )
          .then(async (response) => {
            if (response && response.data && typeof response.data === "string") {
              const yakVersion = (response.data).split("\n")[0];
              setVersion(yakVersion);
    
              await getSize(macOSIntel.url, yakVersion, (size) => {
                setMacOSIntel({ ...macOSIntel, size });
              });
              await getSize(
                macOSAppleSillion.url,
                yakVersion,
                (size) => {
                  setMacOSAppleSillion({ ...macOSAppleSillion, size });
                }
              );
              await getSize(Linux.url, yakVersion, (size) => {
                setLinux({ ...Linux, size });
              });
              await getSize(Windows.url, yakVersion, (size) => {
                setWindows({ ...Windows, size });
              });
            } else {
              message.error("获取irify版本错误，请刷新页面后重试");
            }
          })
          .catch((error) => {
            message.error("获取irify版本错误，请刷新页面后重试");
          });
      });
      const getUrl = useMemoizedFn((url,newVersion = version) => {
        return `https://oss-qn.yaklang.com/irify/${newVersion}/IRify-${newVersion}-${url}`;
      });
      const getSize = useMemoizedFn(
        async (url, newVersion, callBack) => {
          await axios
            .head(getUrl(url,newVersion))
            .then((response) => {
              if (
                response &&
                response.headers &&
                response.headers["content-length"]
              ) {
                const size =
                  Math.ceil(
                    (response.headers["content-length"] / 1024 / 1024) * 100
                  ) / 100;
                callBack(size);
              } else {
                message.error(`获取yakit-${url}版本大小错误`);
              }
            })
            .catch((error) => {
              message.error(`获取yakit-${url}版本大小错误`);
            });
        }
      );
    
      const onDownload = useMemoizedFn((url) => {
        if (!version) {
          message.error("获取yakit版本错误，请刷新页面后重试");
          return;
        }
        const link = getUrl(url);
        window.location.href = link;
      });

    return (
        <div className={clsx("container", styles["feature-wrapper"])}> 

            <div className={classNames(styles['guide-body-yakit'],styles["guide-body-yak-heard"])}>
                <span className={styles["guide-body-yak-heard-text"]}>
                  下载IRIFY IDE (IRify)
                </span>
                {/* <a
                  target="_blank"
                  href="/products/download_and_install"
                  className={styles["guide-body-yak-heard-tip"]}
                >
                  安装说明
                </a> */}
              </div>
              <div className={styles["guide-body-yakit-type"]}>
                <div className={styles["guide-body-yakit-item"]}>
                  <div className={styles["guide-body-yakit-item-left"]}>
                    <span className={styles["guide-body-yakit-item-left-icon"]}>
                      {AppleIcon}
                    </span>
                  </div>
                  <div className={styles["guide-body-yakit-item-right"]}>
                    <div>macOS (Intel / Apple Silicon)</div>
                    <div className={styles["guide-body-yakit-item-right-size"]}>
                      版本:&nbsp;{version || "-"}&nbsp;(
                      {macOSIntel.size || "-"}
                      &nbsp;MB / {macOSAppleSillion.size || "-"}&nbsp;MB)
                    </div>
                  </div>

                  <div className={styles["download-btn-wrap"]}>
                    <div className={styles["download-btn-item-box"]}>
                      <div
                        className={classNames(styles['download-btn-item'],styles["download-btn-item-special"])}
                        style={{ marginBottom: 4 }}
                        onClick={() => onDownload(macOSIntel.url)}
                      >
                        下载 Intel 芯片
                      </div>
                      <div
                        className={classNames(styles['download-btn-item'],styles["download-btn-item-special"])}
                        onClick={() => onDownload(macOSAppleSillion.url)}
                      >
                        下载 Apple Silicon 芯片
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["guide-body-yakit-item"]}>
                  <div className={styles["guide-body-yakit-item-left"]}>
                    <span className={styles["guide-body-yakit-item-left-icon"]}>
                      {LinuxIcon}
                    </span>
                  </div>
                  <div className={styles["guide-body-yakit-item-right"]}>
                    <div>{Linux.key}</div>
                    <div className={styles["guide-body-yakit-item-right-size"]}>
                      版本:&nbsp;{version || "-"}&nbsp;(
                      {Linux.size || "-"}
                      &nbsp;MB)
                    </div>
                  </div>
                  <div className={styles["download-btn-wrap"]}>
                    <div className={styles["download-btn-item-box"]}>
                      <div
                        className={styles["download-btn-item"]}
                        onClick={() => onDownload(Linux.url)}
                      >
                        下载
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["guide-body-yakit-item"]}>
                  <div className={styles["guide-body-yakit-item-left"]}>
                    <span className={styles["guide-body-yakit-item-left-icon"]}>
                      {WindowsIcon}
                    </span>
                  </div>
                  <div className={styles["guide-body-yakit-item-right"]}>
                    <div>{Windows.key}</div>
                    <div className={styles["guide-body-yakit-item-right-size"]}>
                      版本:&nbsp;{version || "-"}&nbsp;(
                      {Windows.size || "-"}
                      &nbsp;MB)
                    </div>
                  </div>
                  <div className={styles["download-btn-wrap"]}>
                    <div className={styles["download-btn-item-box"]}>
                      <div
                        className={styles["download-btn-item"]}
                        onClick={() => onDownload(Windows.url)}
                      >
                        下载
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["guide-body-yakit-item"]}>
                  <div className={styles["guide-body-yakit-item-left"]}>
                    <span className={styles["guide-body-yakit-item-left-icon"]}>
                      {LinuxIcon}
                    </span>
                  </div>
                  <div className={styles["guide-body-yakit-item-right"]}>
                    <div>{LinuxArm64.key}</div>
                    <div className={styles["guide-body-yakit-item-right-size"]}>
                      支持统信 UOS、麒麟等国产系统
                    </div>
                  </div>
                  <div className={styles["download-btn-wrap"]}>
                    <div className={styles["download-btn-item-box"]}>
                      <div
                        className={classNames(styles['download-btn-item'],styles["download-btn-item-special2"])}
                        onClick={() => onDownload(LinuxArm64.url)}
                      >
                        下载
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["guide-body-yakit-legacy-wrap"]}>
                <Dropdown
                    className={styles["yakit-legacy-dropdown"]}
                    visible={legacyVisible}
                    destroyPopupOnHide={true}
                    overlay={
                      <Menu>
                        {[
                          {
                            name: "Windows",
                            desc: "支持Win7系统",
                            url: "windows-legacy-amd64.exe",
                          },
                          {
                            name: "Linux-amd",
                            desc: "支持统信UOS、麒麟等国产系统，注意识别系统架构",
                            url: "linux-legacy-amd64.AppImage",
                          },
                          {
                            name: "Linux-arm",
                            desc: "支持统信UOS、麒麟等国产系统，注意识别系统架构",
                            url: "linux-legacy-arm64.AppImage",
                          },
                          {
                            name: "macOS Intel",
                            desc: "支持macOS 10.13和macOS 10.14",
                            url: "darwin-legacy-x64.dmg",
                          },
                          {
                            name: "macOS Apple Silicon",
                            desc: "支持macOS 10.13和macOS 10.14",
                            url: "darwin-legacy-arm64.dmg",
                          },
                        ].map((item) => {
                          return (
                              <Menu.Item key={item.name}>
                                <div
                                    className={styles["yakit-legacy-item"]}
                                    onClick={() => {
                                      onDownload(item.url);
                                      setLegacyVisible(false);
                                    }}
                                >
                                  <div className={styles["yakit-legacy-item-left"]}>
                                    <div className={styles["yakit-legacy-item-name"]}>{
                                        item.name
                                    }</div>
                                    <div className={styles["yakit-legacy-item-desc"]}>
                                      {item.desc}（{version}）
                                    </div>
                                  </div>
                                  <div className={styles["yakit-legacy-item-right"]}>
                                    {DownloadIcon}
                                  </div>
                                </div>
                              </Menu.Item>
                          );
                        })}
                      </Menu>
                    }
                    trigger={["click"]}
                    placement="bottomCenter"
                    onVisibleChange={(visible) => setLegacyVisible(visible)}
                >
                  <span className={styles["guide-body-yakit-legacy-btn"]}>
                    下载兼容版本
                  </span>

                </Dropdown>
                <span style={{ display: 'block',fontSize :'12px',color:'#999ea8'}}>
                    如果您需要使用IRify用于商业化目的，请确保你们已经获得官方授权，否则我们将追究您的相关责任。
                  </span>
              </div>


            <div className={clsx("row", styles["feature"])}>
                {FeatureList.map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
            </div>
            <div className={styles["code-analysis"]}>
                <h2 className={styles["code-analysis-title"]}>
                    SyntaxFlow 已支持的（部分）规则列表
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
            title={`Compiler-Level SSA-IR Security Scanning Tech`}
            description="编译器级SSA代码扫描技术"
        >
            <HomepageHeader/>
            <HomepageFeatures/>
        </Layout>
    );
}
