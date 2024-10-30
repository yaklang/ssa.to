import React, {
  memo,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Button,
  Collapse,
  CollapseProps,
  Descriptions,
  DescriptionsProps,
  Divider,
  Drawer,
  message,
  Radio,
  Tag,
  Tooltip,
} from "antd";
import {} from "@ant-design/icons";
import {
  useCreation,
  useGetState,
  useMap,
  useMemoizedFn,
} from "ahooks";
import styles from "./CodeDetailDrawer.module.scss";
import classNames from "classnames";
import { CustomTag } from "@site/src/components/CustomTag";
import { AiDialogueInfo, Risk } from "..";
import {
  OutlineChevrondownIcon,
  OutlineChevronrightIcon,
  OutlineChevronupIcon,
  OutlineLightbulbIcon,
  OutlineXIcon,
} from "@site/src/assets/icons/outline";
import { formatTimestamp } from "@site/src/utils";
import {
  IconSolidDefaultRiskIcon,
  IconSolidHighRiskIcon,
  IconSolidInfoRiskIcon,
  IconSolidLowRiskIcon,
  IconSolidMediumRiskIcon,
  IconSolidSeriousIcon,
} from "./icon";
import { NetWorkApi } from "@site/src/services/axiosInstance";
import { ResizeBox } from "@site/src/components/ResizeBox";
import { v4 as uuidv4 } from "uuid";
import { AuditNodeProps, AuditTree } from "@site/src/components/AuditTree";
import { YakitEmpty } from "@site/src/components/YakitEmpty/YakitEmpty";
import { RightAuditDetail } from "@site/src/components/RightAuditDetail/RightAuditDetail";
import { loadAuditFromYakURLRaw } from "@site/src/components/RightAuditDetail/utils";
import moment from "moment";
import { useResizeDetector } from "react-resize-detector";
const { Panel } = Collapse;

export interface CodeDetailDrawerProps {
  onClose: () => void;
  info: Risk;
  list: Risk[];
  drawerContainer: HTMLDivElement | null;
  lang: string;
  onAiDialogueClick: (info: AiDialogueInfo) => void;
}
export const CodeDetailDrawer: React.FC<CodeDetailDrawerProps> = (props) => {
  const { onClose, info, list, drawerContainer, lang, onAiDialogueClick } =
    props;
  const [tabActive, setTabActive] = useState<"risk" | "audit">("risk");
  const [currentInfo, setCurrentInfo] = useState<Risk>(info);
  const {
    width: codeWidth = 0,
    height: codeHeight = 0,
    ref: codeRef,
  } = useResizeDetector({ refreshMode: "throttle", refreshRate: 30 });

  const isPreOrNext = useMemo(() => {
    const currentIndex: number = list.findIndex(
      (item) => item.result_id === currentInfo.result_id
    );
    return {
      pre: currentIndex !== 0 && list.length > 1,
      next: currentIndex < list.length - 1,
    };
  }, [currentInfo, list]);

  const onPreFun = useMemoizedFn(() => {
    const currentIndex: number = list.findIndex(
      (item) => item.result_id === currentInfo.result_id
    );
    if (currentIndex <= list.length - 1) {
      setCurrentInfo(list[currentIndex - 1]);
    }
  });

  const onNextFun = useMemoizedFn(() => {
    const currentIndex: number = list.findIndex(
      (item) => item.result_id === currentInfo.result_id
    );
    if (currentIndex <= list.length - 1) {
      setCurrentInfo(list[currentIndex + 1]);
    }
  });

  const onCloseDetailDrawer = useMemoizedFn(() => {
    onClose();
  });

  const onAiDialogue = useMemoizedFn((e) => {
    e.stopPropagation();
    onAiDialogueClick({
      query: {
        lang: lang,
        result_id: currentInfo.result_id,
        var_name: currentInfo.var_name,
      },
      extra: {
        index: currentInfo.index,
        title: currentInfo.title,
        time: moment().format("YYYY-MM-DD HH:mm:ss"),
      },
    });
  });

  return (
    <Drawer
      className={styles["code-detail-drawer"]}
      placement="bottom"
      closable={false}
      onClose={onCloseDetailDrawer}
      open={true}
      getContainer={drawerContainer === null ? undefined : drawerContainer}
      height={"80%"}
      rootStyle={{
        position: "absolute",
      }}
    >
      <div className={styles["code-detail"]} ref={codeRef}>
        {codeWidth < 500 ? (
          <div className={classNames(styles["header-mobile"])}>
            <div className={styles["header"]}>
              <div className={styles["title"]}>
                <Radio.Group
                  style={{ marginRight: 12 }}
                  size="small"
                  buttonStyle="solid"
                  value={tabActive}
                  onChange={(e) => setTabActive(e.target.value)}
                >
                  <Radio.Button value="risk">漏洞详情</Radio.Button>
                  <Radio.Button value="audit">审计详情</Radio.Button>
                </Radio.Group>
              </div>
              <div className={styles["extra"]}>
                <div
                  className={styles["table-btn"]}
                  style={{ color: "var(--yakit-primary-5)" }}
                  onClick={onAiDialogue}
                >
                  AI 研判
                </div>
                <Divider type="vertical" style={{ margin: 0, height: 16 }} />
                {isPreOrNext.pre && (
                  <Tooltip title={"切换上一条"}>
                    <div
                      className={classNames(styles["drawer-icon"])}
                      onClick={onPreFun}
                    >
                      <OutlineChevronupIcon />
                    </div>
                  </Tooltip>
                )}
                {isPreOrNext.next && (
                  <Tooltip title={"切换下一条"}>
                    <div
                      className={classNames(styles["drawer-icon"])}
                      onClick={onNextFun}
                    >
                      <OutlineChevrondownIcon />
                    </div>
                  </Tooltip>
                )}
                <div className={styles["drawer-icon"]} onClick={onClose}>
                  <OutlineXIcon />
                </div>
              </div>
            </div>
            <div className={styles["header-detail"]}>
              <CustomTag color="purple" closable={false}>
                • {currentInfo.index}
              </CustomTag>
              <CustomTag color="blue" closable={false}>
                {currentInfo.title.length > 20
                  ? `${currentInfo.title.slice(0, 20)}...`
                  : currentInfo.title}
              </CustomTag>
            </div>
          </div>
        ) : (
          <div className={styles["header-pc"]}>
            <div className={styles["header"]}>
              <div className={styles["title"]}>
                <Radio.Group
                  style={{ marginRight: 12 }}
                  size="small"
                  buttonStyle="solid"
                  value={tabActive}
                  onChange={(e) => setTabActive(e.target.value)}
                >
                  <Radio.Button value="risk">漏洞详情</Radio.Button>
                  <Radio.Button value="audit">审计详情</Radio.Button>
                </Radio.Group>
                <CustomTag color="purple" closable={false}>
                  • {currentInfo.index}
                </CustomTag>
                <CustomTag color="blue" closable={false}>
                  {currentInfo.title.length > 20
                    ? `${currentInfo.title.slice(0, 20)}...`
                    : currentInfo.title}
                </CustomTag>
              </div>
              <div className={styles["extra"]}>
                <div
                  className={styles["table-btn"]}
                  style={{ color: "var(--yakit-primary-5)" }}
                  onClick={onAiDialogue}
                >
                  AI 研判
                </div>
                <Divider type="vertical" style={{ margin: 0, height: 16 }} />
                {isPreOrNext.pre && (
                  <Tooltip title={"切换上一条"}>
                    <div
                      className={classNames(styles["drawer-icon"])}
                      onClick={onPreFun}
                    >
                      <OutlineChevronupIcon />
                    </div>
                  </Tooltip>
                )}
                {isPreOrNext.next && (
                  <Tooltip title={"切换下一条"}>
                    <div
                      className={classNames(styles["drawer-icon"])}
                      onClick={onNextFun}
                    >
                      <OutlineChevrondownIcon />
                    </div>
                  </Tooltip>
                )}
                <div className={styles["drawer-icon"]} onClick={onClose}>
                  <OutlineXIcon />
                </div>
              </div>
            </div>
          </div>
        )}
        {tabActive === "risk" ? (
          <YakitCodeScanRiskDetails info={currentInfo} />
        ) : (
          <YakitCodeScanAuditDetails
            rowData={currentInfo}
            wrapperWidth={codeWidth}
          />
        )}
      </div>
    </Drawer>
  );
};

/**name字段里面的内容不可随意更改，与查询条件有关 */
export const SeverityMapTag = [
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

export interface YakURLKVPair {
  key: string;
  value: string;
}

export interface AuditYakUrlProps {
  from_raw?: string;
  schema: string;
  user?: string;
  pass?: string;
  // 正常操作查询
  location: string;
  path: string;
  query?: YakURLKVPair[];
}

export interface AuditEmiterYakUrlProps {
  url: AuditYakUrlProps;
  body: string;
  page?: number;
  pagesize?: number;
}

export interface YakURL {
  from_raw: string;
  schema: string;
  user: string;
  pass: string;
  location: string;
  path: string;
  query: YakURLKVPair[];
}

export interface YakURLResource {
  resource_type: string;
  verbose_type: string;
  resource_name: string;
  verbose_name: string;
  size: number;
  verbose_size: string;
  modified_timestamp: number;
  path: string;
  yak_url_verbose: string;
  url: YakURL; // Assuming YakURL is another interface
  extra: YakURLKVPair[]; // Assuming KVPair is another interface
  have_children_nodes: boolean;
}

export interface RequestYakURLResponse {
  page: number;
  page_size: number;
  total: number;
  resources: YakURLResource[];
}

export interface CodeRangeProps {
  url: string;
  start_column: number;
  start_line: number;
  end_column: number;
  end_line: number;
}

export interface YakURLDataItemProps {
  index: string;
  code_range: CodeRangeProps;
  source: string;
  resource_name: string;
}

export interface YakitCodeScanRiskDetailsProps {
  className?: string;
  info: Risk;
  onClickIP?: (info: Risk) => void;
  border?: boolean;
}

export const YakitCodeScanRiskDetails: React.FC<YakitCodeScanRiskDetailsProps> =
  React.memo((props) => {
    const { info, className, border } = props;

    const [activeKey, setActiveKey] = useState<string | string[]>();
    const [yakURLData, setYakURLData] = useState<YakURLDataItemProps[]>([]);
    const [isShowCollapse, setIsShowCollapse] = useState<boolean>(false);

    useEffect(() => {
      const { result_id, var_name, rule_name } = info;
      if (result_id && var_name && rule_name) {
        const params: AuditYakUrlProps = {
          schema: "syntaxflow",
          location: rule_name,
          path: `/${var_name}`,
          query: [{ key: "result_id", value: result_id.toString() }],
        };
        initData({ url: params, body: "" });
      }
    }, [info]);

    const initData = useMemoizedFn(async (params: AuditEmiterYakUrlProps) => {
      try {
        const { body, url } = params;
        const result = await loadAuditFromYakURLRaw(url, body);
        if (result && result.resources.length > 0) {
          let arr: YakURLDataItemProps[] = [];
          result.resources
            .filter((item) => item.resource_type === "value")
            .forEach((item) => {
              let obj: any = {
                index: "",
                source: "",
                resource_name: item.resource_name,
              };
              item.extra.forEach((itemIn) => {
                if (["index", "source"].includes(itemIn.key)) {
                  obj[itemIn.key] = itemIn.value;
                }
                if (itemIn.key === "code_range") {
                  try {
                    obj[itemIn.key] = JSON.parse(itemIn.value);
                  } catch (error) {}
                }
              });
              arr.push(obj);
            });

          setYakURLData(arr);
          setIsShowCollapse(true);
        } else {
          setIsShowCollapse(false);
        }
      } catch (error) {
        setIsShowCollapse(false);
      }
    });

    const severityInfo = useCreation(() => {
      const severity = SeverityMapTag.filter((item) =>
        item.key.includes(info.severity || "")
      )[0];
      let icon = <></>;
      switch (severity?.name) {
        case "信息":
          icon = <IconSolidInfoRiskIcon />;
          break;
        case "低危":
          icon = <IconSolidLowRiskIcon />;
          break;
        case "中危":
          icon = <IconSolidMediumRiskIcon />;
          break;
        case "高危":
          icon = <IconSolidHighRiskIcon />;
          break;
        case "严重":
          icon = <IconSolidSeriousIcon />;
          break;
        default:
          icon = <IconSolidDefaultRiskIcon />;
          break;
      }
      return {
        icon,
        tag: severity?.tag || "default",
        name: severity?.name || info?.severity || "-",
      };
    }, [info.severity]);

    return (
      <div
        className={classNames(
          styles["yakit-risk-details-content"],
          "yakit-descriptions",
          {
            [styles["yakit-risk-details-content-no-border"]]: !border,
          },
          className
        )}
      >
        <div className={styles["content-heard"]}>
          <div className={styles["content-heard-left"]}>
            <div className={styles["content-heard-severity"]}>
              {severityInfo.icon}
              <span
                className={classNames(
                  styles["content-heard-severity-name"],
                  styles[`severity-${severityInfo.tag}`]
                )}
              >
                {severityInfo.name}
              </span>
            </div>
            <Divider type="vertical" style={{ height: 40, margin: "0 16px" }} />
            <div className={styles["content-heard-body"]}>
              <div
                className={classNames(
                  styles["content-heard-body-title"],
                  "content-ellipsis"
                )}
              >
                {info.title || "-"}
              </div>
              <div className={styles["content-heard-body-description"]}>
                <CustomTag color="purple" closable={false}>
                  ID:{info.index}
                </CustomTag>
                <Divider
                  type="vertical"
                  style={{ height: 16, margin: "0 8px" }}
                />
                <span className={styles["content-heard-body-time"]}>
                  发现时间:
                  {!!info.timestamp
                    ? formatTimestamp(parseInt(info.timestamp))
                    : "-"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <AuditResultDescribe info={info} />
        <div className={styles["content-resize-collapse"]}>
          <div className={styles["main-title"]}>相关代码段</div>
          <AuditResultCollapse data={yakURLData} />
        </div>
        <div className={styles["no-more"]}>暂无更多</div>
      </div>
    );
  });

export interface AuditResultDescribeProps {
  info: Risk;
}

export const AuditResultDescribe: React.FC<AuditResultDescribeProps> =
  React.memo((props) => {
    const { info } = props;

    const items: DescriptionsProps["items"] = [
      {
        key: "1",
        label: "类型",
        children: info.type.replaceAll("NUCLEI-", ""),
      },
      {
        key: "2",
        label: "Hash",
        children: info?.risk_hash || "-",
      },
      {
        key: "3",
        label: "扫描规则",
        children: info?.rule_name || "漏洞检测",
      },
    ];

    return (
      <div className={styles["content-resize-second"]}>
        <Descriptions
          size="small"
          bordered
          items={items}
          labelStyle={{ width: 100 }}
        />
      </div>
    );
  });

interface AuditResultCollapseProps {
  data: YakURLDataItemProps[];
  isShowExtra?: boolean;
}

export const AuditResultCollapse: React.FC<AuditResultCollapseProps> =
  React.memo((props) => {
    const { data, isShowExtra } = props;

    const titleRender = (info: YakURLDataItemProps) => {
      const { index, code_range, source, resource_name } = info;
      return (
        <div className={styles["node-content"]}>
          <div className={classNames(styles["content-body"])}>
            <div
              className={classNames(
                styles["name"],
                styles["yakit-content-single-ellipsis"]
              )}
            >
              {resource_name}
            </div>
            {/* <Tooltip title={`${code_range.url}:${code_range.start_line}`}> */}
            <div
              className={classNames(
                styles["detail"],
                styles["yakit-content-single-ellipsis"]
              )}
            >
              Ln:{code_range.start_line},Col:{code_range.start_column}
            </div>
            {/* </Tooltip> */}
          </div>
        </div>
      );
    };

    const renderItem = (info: YakURLDataItemProps) => {
      return <div className={styles["ir-code-box"]}>{info.source}</div>;
    };

    return (
      <div className={styles["audit-result-collapse"]}>
        <CollapseList
          type="sideBar"
          onlyKey="index"
          list={data}
          titleRender={titleRender}
          renderItem={renderItem}
        />
      </div>
    );
  });

export interface CollapseListProp {
  /**
   * @name 适用场景
   * @description sideBar-侧边栏场景 output-底部输出场景
   * @default sideBar
   */
  type?: "sideBar" | "output";
  panelKey?: string;
  onlyKey?: string;
  list: any[];
  titleRender: (info: any) => ReactNode;
  renderItem: (info: any) => ReactNode;
  collapseProps?: CollapseProps;
  isShowBottom?: boolean;
}

export const CollapseList: React.FC<CollapseListProp> = memo((props) => {
  const {
    type = "sideBar",
    panelKey,
    onlyKey = "",
    list,
    titleRender,
    renderItem,
    collapseProps,
    isShowBottom,
  } = props;

  const wrapperClassName = useMemo(() => {
    if (type === "sideBar") return styles["collapse-list-side-bar"];
    return styles["collapse-list-output"];
  }, [type]);

  const containerClassName = useMemo(() => {
    if (type === "sideBar") return styles["collapse-list-container-side-bar"];
    return styles["collapse-list-container-output"];
  }, [type]);

  return (
    <div className={wrapperClassName}>
      <Collapse
        ghost
        className={classNames(styles["collapse-list-base"], containerClassName)}
        expandIcon={(panelProps) => {
          const { isActive } = panelProps;
          return (
            <OutlineChevronrightIcon
              className={classNames({ "collapse-expand-arrow": !!isActive })}
            />
          );
        }}
        {...collapseProps}
      >
        {list.map((item, index) => {
          return (
            <Panel
              header={titleRender(item)}
              key={item[onlyKey] || `${panelKey || "collapse-list"}-${index}`}
            >
              <div
                className={classNames(styles["list-item-render"], {
                  [styles["list-item-render-sideBar"]]: type === "sideBar",
                })}
              >
                {type === "output" && (
                  <div className={styles["render-tail"]}></div>
                )}
                {renderItem(item)}
              </div>
            </Panel>
          );
        })}
        {isShowBottom && <div className={styles["to-end"]}>已经到底啦～</div>}
      </Collapse>
    </div>
  );
});

// Map存储列表详情
export interface AuditNodeMapProps {
  /** 父路径 */
  parent: string | null;
  /** id */
  id: string;
  isLeaf?: boolean;

  resource_type: string;
  verbose_type: string;
  name: string;
  size: number;
  extra: YakURLKVPair[];
}

export interface YakitCodeScanAuditDetailsProps {
  rowData: Risk;
  wrapperWidth?: number;
}
const TopId = "top-message-code-scan";

export const YakitCodeScanAuditDetails: React.FC<YakitCodeScanAuditDetailsProps> =
  React.memo((props) => {
    const { rowData, wrapperWidth } = props;

    const [value, setValue] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [isShowEmpty, setShowEmpty] = useState<boolean>(false);
    const [expandedKeys, setExpandedKeys] = React.useState<string[]>([]);
    const [foucsedKey, setFoucsedKey] = React.useState<string>("");

    const [refreshTree, setRefreshTree] = useState<boolean>(false);
    const [
      auditMap,
      { set: setAuditMap, get: getAuditMap, reset: resetAuditMap },
    ] = useMap<string, AuditNodeMapProps>();
    const getMapAuditDetail = (id: string): AuditNodeMapProps => {
      return (
        getAuditMap(id) || {
          parent: null,
          name: "读取失败",
          isLeaf: true,
          id: `${uuidv4()}-fail`,
          resource_type: "",
          verbose_type: "",
          size: 0,
          extra: [],
        }
      );
    };

    const [
      auditChildMap,
      {
        set: setAuditChildMap,
        get: getAuditChildMap,
        reset: resetAuditChildMap,
      },
    ] = useMap<string, string[]>();
    const getMapAuditChildDetail = (id: string) => {
      return getAuditChildMap(id) || [];
    };

    const initAuditTree = useMemoizedFn((ids: string[], depth: number) => {
      return ids.map((id) => {
        const itemDetail = getMapAuditDetail(id);
        let obj: AuditNodeProps = { ...itemDetail, depth };
        const childArr = getMapAuditChildDetail(id);

        if (
          itemDetail.resource_type === "variable" ||
          itemDetail.resource_type === TopId
        ) {
          obj.children = initAuditTree(childArr, depth + 1);
          // 数量为0时不展开 message除外
          if (
            parseInt(obj.size + "") === 0 &&
            itemDetail.resource_type !== TopId
          ) {
            obj.isLeaf = true;
          } else {
            obj.isLeaf = false;
          }
        } else {
          obj.isLeaf = true;
        }

        return obj;
      });
    });

    const auditDetailTree = useMemo(() => {
      const ids: string[] = getMapAuditChildDetail("/");
      const initTree = initAuditTree(ids, 1);
      // 归类排序
      const initTreeLeaf = initTree.filter((item) => item.isLeaf);
      const initTreeNoLeaf = initTree.filter((item) => !item.isLeaf);
      const newInitTree = [...initTreeNoLeaf, ...initTreeLeaf];
      if (newInitTree.length > 0) {
        newInitTree.push({
          parent: null,
          name: "已经到底啦~",
          id: "111",
          depth: 1,
          isBottom: true,
          extra: [],
          resource_type: "",
          verbose_type: "",
          size: 0,
        });
      }
      return newInitTree;
    }, [refreshTree]);

    const handleAuditLoadData = useMemoizedFn((id: string) => {
      return new Promise(async (resolve, reject) => {
        // 校验其子项是否存在
        const childArr = getMapAuditChildDetail(id);
        if (id === TopId) {
          resolve("");
          return;
        }
        if (childArr.length > 0) {
          setRefreshTree(!refreshTree);
          resolve("");
        } else {
          const path = id;
          const params: AuditYakUrlProps = {
            schema: "syntaxflow",
            location: rowData.program_name,
            path: path,
            query: [{ key: "result_id", value: rowData.result_id.toString() }],
          };
          const result = await loadAuditFromYakURLRaw(params, "");
          if (result) {
            let variableIds: string[] = [];
            result.resources
              .filter((item) => item.verbose_type !== "result_id")
              .forEach((item, index) => {
                const {
                  resource_type,
                  verbose_type,
                  verbose_name,
                  resource_name,
                  size,
                  extra,
                } = item;
                let value: string = `${index}`;
                const arr = extra.filter((item) => item.key === "index");
                if (arr.length > 0) {
                  value = arr[0].value;
                }
                const newId = `${id}/${value}`;
                variableIds.push(newId);
                setAuditMap(newId, {
                  parent: path,
                  id: newId,
                  name: resource_name,
                  resource_type,
                  verbose_type,
                  size,
                  extra,
                });
              });
            setAuditChildMap(path, variableIds);
            setTimeout(() => {
              setRefreshTree(!refreshTree);
              resolve("");
            }, 300);
          } else {
            reject();
          }
        }
      });
    });

    const onLoadData = useMemoizedFn((node: AuditNodeProps) => {
      if (node.parent === null) return Promise.reject();
      if (handleAuditLoadData) return handleAuditLoadData(node.id);
      return Promise.reject();
    });

    const resetMap = useMemoizedFn(() => {
      // 清除上次数据
      resetAuditChildMap();
      resetAuditMap();
      setExpandedKeys([]);
    });

    const onSubmit = useMemoizedFn(async () => {
      try {
        resetMap();
        setLoading(true);
        setShowEmpty(false);
        const path: string = "/";
        const params: AuditYakUrlProps = {
          schema: "syntaxflow",
          location: rowData.program_name,
          path: "/",
          query: [{ key: "result_id", value: rowData.result_id.toString() }],
        };
        const result = await loadAuditFromYakURLRaw(params, "");

        if (result && result.resources.length > 0) {
          let messageIds: string[] = [];
          let variableIds: string[] = [];
          // 构造树结构
          result.resources
            .filter((item) => item.verbose_type !== "result_id")
            .forEach((item, index) => {
              const {
                resource_type,
                verbose_type,
                verbose_name,
                resource_name,
                size,
                extra,
              } = item;
              // 警告信息（置顶显示）前端收集折叠
              if (resource_type === "message") {
                const id = `${TopId}${path}${verbose_name}-${index}`;
                messageIds.push(id);
                setAuditMap(id, {
                  parent: path,
                  id,
                  name: verbose_name,
                  resource_type,
                  verbose_type,
                  size,
                  extra,
                });
              }
              // 变量
              if (resource_type === "variable") {
                const id = `${path}${resource_name}`;
                variableIds.push(id);
                setAuditMap(id, {
                  parent: path,
                  id,
                  name: resource_name,
                  resource_type,
                  verbose_type,
                  size,
                  extra,
                });
              }
            });
          let topIds: string[] = [];
          if (messageIds.length > 0) {
            topIds.push(TopId);
            setAuditMap(TopId, {
              parent: path,
              id: TopId,
              name: "message",
              resource_type: TopId,
              verbose_type: "",
              size: 0,
              extra: [],
            });
            setAuditChildMap(TopId, messageIds);
          }
          setAuditChildMap("/", [...topIds, ...variableIds]);
          setRefreshTree(!refreshTree);
        } else {
          setShowEmpty(true);
        }
        setLoading(false);
      } catch (error: any) {
        message.error(`${error}`);
        setShowEmpty(true);
        setLoading(false);
      }
    });

    useEffect(() => {
      onSubmit();
    }, [rowData]);

    const [auditRightParams, setAuditRightParams] =
      useState<AuditEmiterYakUrlProps>();
    const [isShowAuditDetail, setShowAuditDetail] = useState<boolean>(false);

    const onJump = useMemoizedFn((node: AuditNodeProps) => {
      if (node.resource_type === "value") {
        setFoucsedKey(node.id);
        const rightParams: AuditYakUrlProps = {
          schema: "syntaxflow",
          location: rowData.program_name,
          path: node.id,
          query: [{ key: "result_id", value: rowData.result_id.toString() }],
        };
        setAuditRightParams({ url: rightParams, body: "" });
        setShowAuditDetail(true);
      }
    });

    return (
      <>
        {wrapperWidth && wrapperWidth < 500 ? (
          <>
            <div
              style={{ height: "auto" }}
              className={styles["audit-code-detail-drawer"]}
            >
              <div className={styles["header"]}>
                <div className={styles["title-box"]}>
                  <div className={styles["title"]}>{rowData.title}</div>

                  <div className={styles["advice-icon"]}>
                    <OutlineLightbulbIcon />
                  </div>
                </div>
                {/* {rowData.Description && (
                <div className={styles["description"]}>
                  {rowData.Description}
                </div>
              )} */}
              </div>
              {isShowEmpty ? (
                <div className={styles["no-data"]}>暂无数据</div>
              ) : (
                <AuditTree
                  data={auditDetailTree}
                  expandedKeys={expandedKeys}
                  setExpandedKeys={setExpandedKeys}
                  onLoadData={onLoadData}
                  foucsedKey={foucsedKey}
                  setFoucsedKey={setFoucsedKey}
                  onJump={onJump}
                  onlyJump={true}
                  wrapClassName={styles["audit-tree-wrap"]}
                />
              )}
            </div>
            <>
              {isShowAuditDetail ? (
                <RightAuditDetail
                  auditRightParams={auditRightParams}
                  isShowAuditDetail={isShowAuditDetail}
                  setShowAuditDetail={setShowAuditDetail}
                  wrapClassName={styles["right-audit-detail-wrap"]}
                />
              ) : (
                <div className={styles["no-audit"]}>
                  <YakitEmpty title="暂无数据" description="请选择左边内容" />
                </div>
              )}
            </>
          </>
        ) : (
          <ResizeBox
            firstRatio="300px"
            firstMinSize={300}
            secondMinSize={180}
            firstNodeStyle={{ padding: 0 }}
            secondNodeStyle={{ padding: 0 }}
            firstNode={
              <div className={styles["audit-code-detail-drawer"]}>
                <div className={styles["header"]}>
                  <div className={styles["title-box"]}>
                    <div className={styles["title"]}>{rowData.title}</div>

                    <div className={styles["advice-icon"]}>
                      <OutlineLightbulbIcon />
                    </div>
                  </div>
                  {/* {rowData.Description && (
                <div className={styles["description"]}>
                  {rowData.Description}
                </div>
              )} */}
                </div>
                {isShowEmpty ? (
                  <div className={styles["no-data"]}>暂无数据</div>
                ) : (
                  <AuditTree
                    data={auditDetailTree}
                    expandedKeys={expandedKeys}
                    setExpandedKeys={setExpandedKeys}
                    onLoadData={onLoadData}
                    foucsedKey={foucsedKey}
                    setFoucsedKey={setFoucsedKey}
                    onJump={onJump}
                    onlyJump={true}
                    wrapClassName={styles["audit-tree-wrap"]}
                  />
                )}
              </div>
            }
            secondNode={
              <>
                {isShowAuditDetail ? (
                  <RightAuditDetail
                    auditRightParams={auditRightParams}
                    isShowAuditDetail={isShowAuditDetail}
                    setShowAuditDetail={setShowAuditDetail}
                  />
                ) : (
                  <div className={styles["no-audit"]}>
                    <YakitEmpty title="暂无数据" description="请选择左边内容" />
                  </div>
                )}
              </>
            }
          />
        )}
      </>
    );
  });
