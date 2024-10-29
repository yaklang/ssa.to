import React, { useEffect, useMemo, useRef, useState } from "react";
import Layout from "@theme/Layout";
import {
  Button,
  ConfigProvider,
  Input,
  message,
  Modal,
  Popconfirm,
  Progress,
  Radio,
  Select,
  Space,
  Tooltip,
} from "antd";
import clsx from "clsx";
import { useResizeDetector } from "react-resize-detector";
import { useDebounceEffect, useDebounceFn, useMemoizedFn } from "ahooks";
import { NetWorkApi } from "@site/src/services/axiosInstance";
import {
  OutlineExclamationIcon,
  OutlineHandIcon,
  OutlinePlay2Icon,
  OutlineQuestionmarkcircleIcon,
  OutlineSearchIcon,
  OutlineStopIcon,
} from "@site/src/assets/icons/outline";
import { ResizeBox } from "@site/src/components/ResizeBox";
import SsaEditor from "@site/src/components/SsaEditor/index.module";
import {
  ColumnsTypeProps,
  SortProps,
} from "@site/src/components/TableVirtualResize/TableVirtualResizeType";
import { CustomTag } from "@site/src/components/CustomTag";
import { formatTimestamp } from "@site/src/utils";
import { TableVirtualResize } from "@site/src/components/TableVirtualResize/TableVirtualResize";
import { SolidExclamationIcon } from "@site/src/assets/icons/solid";
import { useCampare } from "@site/src/hook/useCompare/useCompare";
import { CustomTagColor } from "@site/src/components/CustomTag/CustomTagType";
const { TextArea } = Input;
import { AiDialogue } from "@site/src/components/AiDialogue";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.scss";
import { CodeDetailDrawer } from "./_codeDetailDrawer/CodeDetailDrawer";

interface SupportLangRes {
  language: string[];
}
interface TemplateRes {
  template: string[];
}
interface CodeRes {
  content: string;
}
interface AnalysisLog {
  msg: string;
  error: boolean;
}
export interface Risk {
  index: string;
  result_id: number;
  var_name: string;
  title: string;
  type: string;
  severity: string;
  rule_name: string;
  timestamp: string;
  risk_hash: string;
  program_name: string
}

interface CodeAnalysisInitProps {
  onAiDialogueClick: (info: {
    query: AiDialogueReq;
    extra: AiDialogueExtraInfo;
  }) => void;
}
const CodeAnalysisInit: React.FC<CodeAnalysisInitProps> = React.memo(
  (props) => {
    const { onAiDialogueClick } = props;
    const {
      width: headerWidth = 0,
      height: headerHeight = 0,
      ref: headerRef,
    } = useResizeDetector({ refreshMode: "throttle", refreshRate: 30 });
    const splitterHeight = useMemo(() => {
      return `calc(100vh - ${headerHeight + 12 + 1 + 60}px)`;
    }, [headerHeight]);
    const lessThenCriticalWidth = useMemo(() => {
      return headerWidth <= 997;
    }, [headerWidth]);

    const [lang, setLang] = useState<string>("");
    const [langList, setLangList] = useState<
      { value: string; label: string }[]
    >([]);
    const [temp, setTemp] = useState<string>("");
    const [tempList, setTempList] = useState<
      { value: string; label: string }[]
    >([]);
    const [code, setCode] = useState<string>("");
    const [byteSize, setByteSize] = useState<number>(0);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      NetWorkApi<any, SupportLangRes>({
        method: "get",
        url: "/template_lang",
      })
        .then((res) => {
          setLangList(
            res.language.map((lang: string) => ({
              value: lang,
              label: lang,
            }))
          );
        })
        .catch((error) => message.error(error));
    }, []);

    const onLangChange = useMemoizedFn((value) => {
      setLang(value);
      NetWorkApi<any, TemplateRes>({
        method: "get",
        url: `/template/${value}`,
      })
        .then((res) => {
          setTemp("");
          setTempList(
            res.template.map((temp: string) => ({
              value: temp,
              label: temp,
            }))
          );
        })
        .catch((error) => message.error(error));
    });

    const language = useMemo(() => {
      switch (lang) {
        case "js":
          return "javascript";
        case "golang":
          return "go";
        default:
          return lang;
      }
    }, [lang]);

    const onTempChange = useMemoizedFn((value) => {
      setTemp(value);
      NetWorkApi<any, CodeRes>({
        method: "get",
        url: `/template/${lang}/${value}`,
      })
        .then((res) => {
          setCode(res.content);
        })
        .catch((error) => message.error(error));
    });

    const onClickUpload = () => {
      if (fileInputRef.current) {
        // 点击自定义按钮时触发文件选择框
        fileInputRef.current.click();
      }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      handleReadAsText(files);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault(); // 防止默认行为以允许放置
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const files = event.dataTransfer.files; // 获取拖放的文件
      handleReadAsText(files);
    };

    const handleReadAsText = (files: FileList | null) => {
      if (!files) return;
      if (files.length > 0) {
        const file = files[0];
        const suffix = file.name.split(".")[1];
        if (langList.findIndex((item) => item.value === suffix) !== -1) {
          onLangChange(suffix);
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result;
          if (typeof content === "string") {
            setCode(content);
          }
        };
        reader.readAsText(file);
      }
    };

    useDebounceEffect(
      () => {
        const byteSize = new Blob([code]).size;
        setByteSize(byteSize);
        const oneMB = 1024 * 1024;
        if (byteSize > oneMB) {
          message.warning("文件超出1M限制，请重新上传");
        }
      },
      [code],
      {
        wait: 300,
      }
    );

    const startFlag = useMemo(() => {
      return !!lang && !!code && byteSize <= 1024 * 1024;
    }, [code, byteSize, lang]);
    const [onlyShowEditor, setOnlyShowEditor] = useState<boolean>(true);
    const [ws, setWs] = useState<WebSocket | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const analysisLogRef = useRef<AnalysisLog[]>([]);
    const [analysisLog, setAnalysisLog] = useState<AnalysisLog[]>([]);
    const progressRef = useRef<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const riskTableDataRef = useRef<Risk[]>([]);
    const [riskTableData, setRiskTableData] = useState<Risk[]>([]);
    const timeRef = useRef<any>(undefined);

    const resetAnalysisData = () => {
      analysisLogRef.current = [];
      setAnalysisLog([]);
      progressRef.current = 0;
      setProgress(0);
      riskTableDataRef.current = [];
      setRiskTableData([]);
    };
    const { siteConfig } = useDocusaurusContext();
    const startAnalysis = useMemoizedFn(() => {
      if (!startFlag) return;
      const wsUrl = siteConfig.customFields?.wsUrl as string | undefined;
      if (!wsUrl) {
        console.error("WebSocket URL 未定义");
        return;
      }
      resetAnalysisData();
      const socket = new WebSocket(`${wsUrl}/scan`);
      socket.onopen = () => {
        setIsConnected(true);
        setOnlyShowEditor(false);
        const params = {
          lang: lang,
          content: code,
          control_message: "start",
        };
        socket.send(JSON.stringify(params)); // 发送初始请求
      };

      socket.onmessage = (event) => {
        try {
          const res = JSON.parse(event.data);
          if (res.error) {
            analysisLogRef.current.unshift({ msg: res.error, error: true });
          } else if (res.message) {
            analysisLogRef.current.unshift({ msg: res.message, error: false });
          } else if (res.progress) {
            progressRef.current = Math.round(res.progress * 100);
          } else if (res.risk) {
            riskTableDataRef.current.push(res.risk[0]);
          }
        } catch (error) {
          console.error(error);
        }
      };

      socket.onclose = () => {
        setIsConnected(false);
      };

      socket.onerror = (error) => {
        console.error(error);
        setIsConnected(false);
      };

      setWs(socket); // 将 WebSocket 实例保存到状态中
    });

    const stopAnalysis = useMemoizedFn(() => {
      if (ws) {
        ws.close();
        setWs(null);
      }
    });

    useEffect(() => {
      return () => {
        if (ws) {
          ws.close();
          if (timeRef.current) {
            clearInterval(timeRef.current);
          }
        }
      };
    }, [ws]);

    useEffect(() => {
      return () => {
        if (timeRef.current) {
          clearInterval(timeRef.current);
        }
      };
    }, []);

    useEffect(() => {
      if (isConnected) {
        if (timeRef.current) {
          clearInterval(timeRef.current);
        }
        timeRef.current = setInterval(() => {
          setAnalysisLog(analysisLogRef.current);
          setProgress(progressRef.current);
          setRiskTableData(
            riskTableDataRef.current.map((item, index) => ({
              ...item,
              index: index < 9 ? `0${index + 1}` : `${index + 1}`,
            }))
          );
        }, 100);
      }
    }, [isConnected]);

    return (
      <div className={styles["codeAnalysis-init-wrapper"]}>
        <div
          className={clsx(styles["codeAnalysis-init-header"])}
          ref={headerRef}
        >
          <div className={clsx(styles["codeAnalysis-init-header-left"])}>
            <span className={styles["codeAnalysis-init-header-title"]}>
              代码审计
            </span>
            <Select
              style={{ flex: 1, maxWidth: 250, minWidth: 100 }}
              value={lang}
              options={langList}
              onChange={onLangChange}
            />
            <Select
              style={{ flex: 1, maxWidth: 250, minWidth: 100 }}
              value={temp}
              options={tempList}
              onChange={onTempChange}
            />
            {lessThenCriticalWidth ? (
              <Tooltip title={<>可将文件拖入框内，或直接粘贴代码</>}>
                <OutlineQuestionmarkcircleIcon
                  className={styles["question-icon"]}
                />
              </Tooltip>
            ) : (
              <div className={styles["codeAnalysis-init-header-info"]}>
                可将文件拖入框内，或
                <input
                  type="file"
                  className={styles["fileInput"]}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <span
                  className={styles["click-upload"]}
                  onClick={onClickUpload}
                >
                  点此上传
                </span>
                ，也支持直接粘贴代码。
              </div>
            )}
          </div>
          <div className={clsx(styles["codeAnalysis-init-header-right"])}>
            <div className={styles["code-size"]}>
              代码大小：
              {byteSize ? (
                <span
                  style={{ color: byteSize > 1024 * 1024 ? "#f00" : undefined }}
                >
                  {(byteSize / 1024).toFixed(2)}K
                </span>
              ) : (
                "0K"
              )}
              /1M
            </div>
            {isConnected ? (
              <Button
                type="primary"
                danger
                onClick={stopAnalysis}
                icon={<OutlineStopIcon />}
                iconPosition="end"
              >
                {lessThenCriticalWidth ? "" : "停止"}
              </Button>
            ) : (
              <Button
                type="primary"
                icon={
                  <OutlinePlay2Icon
                    className={styles["codeAnalysis-start-icon"]}
                  />
                }
                iconPosition="end"
                style={{
                  backgroundColor: !startFlag
                    ? "var(--yakit-primary-3)"
                    : undefined,
                  cursor: !startFlag ? "not-allowed" : undefined,
                }}
                onClick={startAnalysis}
              >
                {lessThenCriticalWidth ? "" : "开始审计"}
              </Button>
            )}
          </div>
        </div>
        <div style={{ height: splitterHeight }}>
          <ResizeBox
            freeze={!onlyShowEditor}
            isRecalculateWH={!onlyShowEditor}
            isVer={true}
            lineDirection="top"
            firstNode={
              <div
                style={{ height: "100%" }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <SsaEditor
                  value={code}
                  onSetValue={setCode}
                  language={language}
                />
              </div>
            }
            firstRatio={onlyShowEditor ? "100%" : "60%"}
            firstMinSize={onlyShowEditor ? "100%" : "50px"}
            firstNodeStyle={{ padding: 0 }}
            secondNode={
              <CodeAnalysisResult
                lang={lang}
                code={code}
                progress={progress}
                analysisLog={analysisLog}
                isConnected={isConnected}
                riskTableData={riskTableData}
                onAiDialogueClick={onAiDialogueClick}
              />
            }
            secondRatio={onlyShowEditor ? "0px" : "40%"}
            secondMinSize={onlyShowEditor ? "0px" : "50px"}
          ></ResizeBox>
        </div>
      </div>
    );
  }
);

const SeverityMapTag = [
  {
    key: ["info", "fingerprint", "infof", "default"],
    value: "title-info",
    name: "信息",
    tag: "success",
  },
  { key: ["low"], value: "title-low", name: "低危", tag: "warning" },
  {
    key: ["middle", "warn", "warning", "medium"],
    value: "title-middle",
    name: "中危",
    tag: "info",
  },
  { key: ["high"], value: "title-high", name: "高危", tag: "danger" },
  {
    key: ["fatal", "critical", "panic"],
    value: "title-fatal",
    name: "严重",
    tag: "serious",
  },
];

interface TableQuery {
  keyWords?: string;
  type?: string;
  severity?: string[];
}
interface FalseNegativeReq {
  lang: string;
  content: string;
  rule_name: string;
}
interface FalseNegativeRes {
  link: string;
}
interface FalsePositiveReq {
  lang: string;
  content: string;
  risk_hash: string;
}
interface FalsePositiveRes {
  link: string;
}
interface CodeAnalysisResultProps {
  lang: string;
  code: string;
  progress: number;
  analysisLog: AnalysisLog[];
  isConnected: boolean;
  riskTableData: Risk[];
  onAiDialogueClick: (info: {
    query: AiDialogueReq;
    extra: AiDialogueExtraInfo;
  }) => void;
}
const CodeAnalysisResult: React.FC<CodeAnalysisResultProps> = React.memo(
  (props) => {
    const {
      lang = "",
      code = "",
      progress = 0,
      analysisLog,
      isConnected,
      riskTableData = [],
      onAiDialogueClick,
    } = props;

    const [tabActive, setTabActive] = useState<"analysising" | "result">(
      "analysising"
    );
    const [keyWords, setKeyWords] = useState<string>("");
    const [tableQuery, setTableQuery] = useState<TableQuery>({
      keyWords: "",
      type: "",
      severity: [],
    });
    const [listTable, setListTable] = useState<Risk[]>([]);
    const [falseNegativeVisible, setFalseNegativeVisible] =
      useState<boolean>(false);
    const [ruleName, setRuleName] = useState<string>("");
    const [detailInfo,setDetailInfo] = useState<Risk>()
    const onFalseNegative = () => {
      NetWorkApi<FalseNegativeReq, FalseNegativeRes>({
        method: "post",
        url: "/report/false_negative",
        data: {
          lang: lang,
          content: code,
          rule_name: ruleName,
        },
      })
        .then((res) => {
          window.open(res.link, "_block");
        })
        .catch((error) => message.error(error));
    };

    const onFalsePositive = (params: FalsePositiveReq) => {
      NetWorkApi<FalsePositiveReq, FalsePositiveRes>({
        method: "post",
        url: "/report/false_positive",
        data: params,
      })
        .then((res) => {
          window.open(res.link, "_block");
        })
        .catch((error) => message.error(error));
    };

    const compareRiskTableData = useCampare(riskTableData);
    const allType = useMemo(() => {
      return [...new Set(riskTableData.map((item) => item.type))];
    }, [compareRiskTableData]);
    const columns: ColumnsTypeProps[] = [
      {
        title: "序号",
        dataKey: "index",
        width: 100,
        fixed: "left",
      },
      {
        title: "标题",
        dataKey: "title",
        render: (text) => <span>{text || "-"}</span>,
      },
      {
        title: "类型",
        dataKey: "type",
        filterProps: {
          filterKey: "type",
          filtersType: "select",
          filtersSelectAll: {
            isAll: true,
            textAll: "全部",
          },
          filterMultiple: false,
          filters: allType.map((type) => ({ value: type, label: type })),
        },
      },
      {
        title: "等级",
        dataKey: "severity",
        width: 100,
        render: (_, record: Risk) => {
          const title = SeverityMapTag.filter((item) =>
            item.key.includes(record.severity || "")
          )[0];
          return (
            <CustomTag
              color={title?.tag as CustomTagColor}
              style={{ marginTop: 6 }}
              closable={false}
              icon={
                <OutlineExclamationIcon className={styles["exclamationIcon"]} />
              }
            >
              {title ? title.name : record.severity || "-"}
            </CustomTag>
          );
        },
        filterProps: {
          filterKey: "severity",
          filtersType: "select",
          filterMultiple: true,
          filters: SeverityMapTag.map((item) => ({
            value: item.name,
            label: item.name,
          })),
        },
      },
      {
        title: "命中规则",
        dataKey: "rule_name",
      },
      {
        title: "发现时间",
        dataKey: "timestamp",
        render: (text) => (text ? formatTimestamp(text) : "-"),
      },
      {
        title: "操作",
        dataKey: "action",
        fixed: "right",
        width: 170,
        render: (_, record: Risk) => {
          return (
            <div className={styles["table-action"]}>
              <Popconfirm
                title="是否确定反馈该条漏洞信息为误报？"
                icon={<SolidExclamationIcon />}
                onConfirm={() =>
                  onFalsePositive({
                    lang: lang,
                    content: code,
                    risk_hash: record.risk_hash,
                  })
                }
                onCancel={() => {}}
                okText="Yes"
                cancelText="No"
                placement="left"
              >
                <div
                  className={styles["table-btn"]}
                  style={{ color: "#F15757" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  误报
                </div>
              </Popconfirm>
              <div
                className={styles["table-btn"]}
                style={{ color: "var(--yakit-primary-5)" }}
                onClick={(e) => {
                  e.stopPropagation();
                  onAiDialogueClick({
                    query: {
                      lang: lang,
                      result_id: record.result_id,
                      var_name: record.var_name,
                    },
                    extra: {
                      index: record.index,
                      title: record.title,
                    },
                  });
                }}
              >
                AI 研判
              </div>
              <div
                className={styles["table-btn"]}
                style={{ color: "var(--yakit-primary-5)" }}
                onClick={()=>{
                  setDetailInfo(record)
                }}
              >
                详情
              </div>
            </div>
          );
        },
      },
    ];

    // 前端搜索
    const queryUpdateData = useDebounceFn(
      () => {
        if (
          tableQuery.keyWords ||
          tableQuery.type ||
          tableQuery.severity?.length
        ) {
          const l = riskTableData.length;
          const searchList: Risk[] = [];
          for (let index = 0; index < l; index++) {
            const record = riskTableData[index];
            let keyWordIsPush = true;
            let typeIsPush = true;
            let severityIsPush = true;
            // 关键字搜索
            if (tableQuery.keyWords) {
              keyWordIsPush = (record.title + record.rule_name).includes(
                tableQuery.keyWords
              );
            }

            // 类型搜索
            if (tableQuery.type) {
              typeIsPush = record.type.includes(tableQuery.type);
            }

            // 等级搜索
            if (tableQuery.severity?.length) {
              const cLength = tableQuery.severity.length;
              const severityIsPushArr: boolean[] = [];
              for (let index = 0; index < cLength; index++) {
                const element = tableQuery.severity[index];
                if (
                  SeverityMapTag.find(
                    (item) => item.name === element
                  )?.key.includes(record.severity)
                ) {
                  severityIsPushArr.push(true);
                } else {
                  severityIsPushArr.push(false);
                }
              }
              severityIsPush = severityIsPushArr.includes(true);
            }

            if (keyWordIsPush && typeIsPush && severityIsPush) {
              searchList.push(record);
            }
          }
          setListTable(searchList);
        } else {
          setListTable(riskTableData);
        }
      },
      { wait: 300 }
    ).run;
    useDebounceEffect(
      () => {
        queryUpdateData();
      },
      [tableQuery, compareRiskTableData],
      { wait: 100 }
    );
    const onTableChange = useMemoizedFn(
      (page: number, limit: number, newSort: SortProps, filter: any) => {
        const newTableQuery = { ...tableQuery, ...filter };
        setTableQuery(newTableQuery);
      }
    );

    return (
      <div className={styles["codeAnalysisResult-wrapper"]}>
        <div className={styles["codeAnalysisResult-header-wrapper"]}>
          <span className={styles["codeAnalysisResult-title"]}>
            <Radio.Group
              buttonStyle="solid"
              value={tabActive}
              onChange={(e) => setTabActive(e.target.value)}
            >
              <Radio.Button value="analysising">审计日志</Radio.Button>
              <Radio.Button value="result">审计结果</Radio.Button>
            </Radio.Group>
          </span>
        </div>
        {tabActive === "analysising" ? (
          <div className={styles["codeAnalysisResult-log"]}>
            <Progress
              percent={progress}
              size="small"
              style={{ width: "35%" }}
              status={
                isConnected === false && progress === 0
                  ? "exception"
                  : progress === 100
                  ? "success"
                  : "active"
              }
            />
            <div className={styles["codeAnalysisResult-log-item"]}>
              审计日志：
            </div>
            {analysisLog.map((item, index) => (
              <div
                className={clsx(
                  "text--truncate",
                  styles["codeAnalysisResult-log-item"],
                  {
                    [styles["log-error"]]: item.error,
                  }
                )}
                key={index}
              >
                {item.msg}
              </div>
            ))}
          </div>
        ) : (
          <div className={styles["codeAnalysisResult-table-wrapper"]}>
            <div className={styles["codeAnalysisResult-table-header"]}>
              <Space.Compact style={{ width: 300 }}>
                <Input
                  placeholder="请输入关键词搜索"
                  value={keyWords}
                  onChange={(e) => setKeyWords(e.target.value)}
                  allowClear
                />
                <Button
                  type="primary"
                  icon={<OutlineSearchIcon className={styles["searchIcon"]} />}
                  onClick={() => {
                    setTableQuery((prev) => ({ ...prev, keyWords: keyWords }));
                  }}
                ></Button>
              </Space.Compact>
              <Button
                type="primary"
                icon={<OutlineHandIcon />}
                iconPosition="end"
                onClick={() => {
                  setRuleName("");
                  setFalseNegativeVisible(true);
                }}
              >
                漏报反馈
              </Button>
            </div>
            <div>
              <TableVirtualResize<Risk>
                query={tableQuery}
                isShowTitle={false}
                enableDrag={true}
                data={listTable}
                renderKey={"result_id"}
                pagination={{
                  page: 1,
                  limit: 50,
                  total: listTable.length,
                  onChange: () => {},
                }}
                columns={columns}
                onChange={onTableChange}
              />
            </div>
            <Modal
              title="漏报反馈"
              centered
              destroyOnClose
              open={falseNegativeVisible}
              onOk={onFalseNegative}
              onCancel={() => setFalseNegativeVisible(false)}
              okText="提交"
              cancelText="取消"
            >
              <TextArea
                style={{ marginTop: 15 }}
                value={ruleName}
                onChange={(e) => setRuleName(e.target.value)}
                placeholder="请简单描述漏报的漏洞..."
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Modal>
            {detailInfo&& <CodeDetailDrawer info={detailInfo} list={listTable} onClose={()=>{
              setDetailInfo(undefined)
            }}/>}
          </div>
        )}
      </div>
    );
  }
);

interface AiDialogueReq {
  lang: string;
  var_name: string;
  result_id: number;
}
interface AiDialogueExtraInfo {
  index: string;
  title: string;
}
interface CodeAnalysisProps {}
const CodeAnalysis: React.FC<CodeAnalysisProps> = (props) => {
  const [showAiDialogue, setShowAiDialogue] = useState<boolean>(false);
  const [aiDialogueFullScreen, setAiDialogueFullScreen] =
    useState<boolean>(false);
  const clickFullScreenRef = useRef<boolean>(false); // 是否点击全屏
  const [showFullScreenBtn, setShowFullScreenBtn] = useState<boolean>(true); // 是否显示全屏按钮
  const [aiDialogueQuery, setAiDialogueQuery] = useState<AiDialogueReq>();

  const onFullScreen = useMemoizedFn(() => {
    if (!aiDialogueFullScreen) {
      clickFullScreenRef.current = true;
    } else {
      clickFullScreenRef.current = false;
    }
    setAiDialogueFullScreen(!aiDialogueFullScreen);
  });

  const onAiDialogueClose = useMemoizedFn(() => {
    clickFullScreenRef.current = false;
    setShowFullScreenBtn(true);
    setAiDialogueFullScreen(false);
    setAiDialogueQuery(undefined);
    setShowAiDialogue(false);
  });

  const { width: codeAnalysisWidth = 0, ref: codeAnalysisRef } =
    useResizeDetector({ refreshMode: "throttle", refreshRate: 30 });
  useEffect(() => {
    if (!codeAnalysisWidth) return;
    if (codeAnalysisWidth <= 997) {
      setShowFullScreenBtn(false);
      if (showAiDialogue) {
        setAiDialogueFullScreen(true);
      }
    } else {
      setShowFullScreenBtn(true);
      if (showAiDialogue) {
        if (!clickFullScreenRef.current) {
          setAiDialogueFullScreen(false);
        }
      }
    }
  }, [codeAnalysisWidth]);

  return (
    <div className={styles["codeAnalysis"]} ref={codeAnalysisRef}>
      <ConfigProvider
        theme={{
          components: {
            Progress: {
              defaultColor: "#8862F8",
            },
          },
          token: {
            colorPrimary: "#8862F8",
          },
        }}
      >
        <ResizeBox
          freeze={aiDialogueFullScreen ? false : showAiDialogue}
          isRecalculateWH={aiDialogueFullScreen ? false : showAiDialogue}
          lineDirection="left"
          firstNode={
            <Layout
              // @ts-ignore
              title="Advanced Analysis Techniques"
              description="Advanced Analysis Techniques"
              noFooter={true}
            >
              <CodeAnalysisInit
                onAiDialogueClick={(info) => {
                  setAiDialogueQuery(info.query);
                  if (codeAnalysisWidth <= 997) {
                    setShowFullScreenBtn(false);
                    setAiDialogueFullScreen(true);
                  }
                  setShowAiDialogue(true);
                }}
              />
            </Layout>
          }
          firstRatio={
            aiDialogueFullScreen ? "0px" : !showAiDialogue ? "100%" : "70%"
          }
          firstMinSize={
            aiDialogueFullScreen ? "0px" : !showAiDialogue ? "100%" : "500px"
          }
          firstNodeStyle={{ padding: 0 }}
          secondNode={
            <AiDialogue<AiDialogueReq | undefined>
              title="AI 研判"
              sendQuery={aiDialogueQuery}
              showFullScreenBtn={showFullScreenBtn}
              fullScreen={aiDialogueFullScreen}
              onFullScreen={onFullScreen}
              onClose={onAiDialogueClose}
            ></AiDialogue>
          }
          secondRatio={
            aiDialogueFullScreen ? "100%" : !showAiDialogue ? "0px" : "30%"
          }
          secondMinSize={
            aiDialogueFullScreen ? "100%" : !showAiDialogue ? "0px" : "300px"
          }
        ></ResizeBox>
      </ConfigProvider>
    </div>
  );
};

export default CodeAnalysis;
