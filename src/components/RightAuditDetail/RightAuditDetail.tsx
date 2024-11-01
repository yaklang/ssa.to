import React, { useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./RightAuditDetail.module.scss";
import {
  useMemoizedFn,
  useThrottleFn,
  useUpdate,
  useUpdateEffect,
} from "ahooks";
import {
  clearMapGraphInfoDetail,
  getMapGraphInfoDetail,
  setMapGraphInfoDetail,
} from "./GraphInfoMap";
import { v4 as uuidv4 } from "uuid";
import { Button, message, Tooltip } from "antd";
import {
  AuditEmiterYakUrlProps,
  CollapseList,
} from "@site/src/pages/codeAnalysis/_codeDetailDrawer/CodeDetailDrawer";
import { instance } from "@viz-js/viz";
import { ResizeBox } from "../ResizeBox";
import {
  OutlineCollectionIcon,
  OutlineXIcon,
  OutlineZoominIcon,
  OutlineZoomoutIcon,
  QuestionMarkCircleIcon,
} from "@site/src/assets/icons/outline";
import { loadAuditFromYakURLRaw } from "./utils";

interface AuditResultItemProps {
  nodeId?: string;
  data: GraphInfoProps[];
  title: string;
  resultKey?: string | string[];
  setResultKey: (v: string | string[]) => void;
}

export const AuditResultItem: React.FC<AuditResultItemProps> = (props) => {
  const { nodeId, data, title, resultKey, setResultKey } = props;

  const titleRender = (info: GraphInfoProps) => {
    const { ir_code, code_range, node_id } = info;
    const lastSlashIndex = code_range.url.lastIndexOf("/");
    const fileName = code_range.url.substring(lastSlashIndex + 1);
    return (
      <div className={styles["result-render"]}>
        <div
          className={classNames(styles["title"], "yakit-single-line-ellipsis")}
        >
          {ir_code}
        </div>
        
          <div
            className={classNames(
              styles["url-box"],
              "yakit-single-line-ellipsis",
              {
                [styles["active-url-box"]]: node_id === nodeId,
              }
            )}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Ln:{code_range.start_line},Col:{code_range.start_column}
          </div>
        
      </div>
    );
  };

  const renderItem = (info: GraphInfoProps) => {
    return <div className={styles["ir-code-box"]}>{info.source_code}</div>;
  };

  return (
    <div className={styles["audit-result-item"]}>
      <CollapseList
        type="sideBar"
        panelKey={title}
        list={data}
        titleRender={titleRender}
        renderItem={renderItem}
        collapseProps={{
          activeKey: resultKey,
          onChange: (v) => {
            setResultKey(v);
          },
        }}
      />
    </div>
  );
};

interface AuditResultBoxProps {
  nodeId?: string;
  graphLine?: string[][];
  message: string;
  activeKey?: string | string[];
  setActiveKey: (v: string | string[]) => void;
}

interface InitDataProps {
  title: string;
  children: GraphInfoProps[];
  nodeId?: string;
}

export const AuditResultBox: React.FC<AuditResultBoxProps> = (props) => {
  const { nodeId, graphLine, message, activeKey, setActiveKey } = props;
  const [resultKey, setResultKey] = useState<string | string[]>();

  useUpdateEffect(() => {
    if (activeKey === undefined) {
      setResultKey(undefined);
    }
  }, [activeKey]);

  const getChildren = useMemoizedFn((data: string[]) => {
    const children = data
      .map((itemIn) => {
        const detail = getMapGraphInfoDetail(itemIn);
        if (detail) {
          return {
            ...detail,
          };
        }
        return;
      })
      .filter((item) => item !== undefined) as GraphInfoProps[];
    return children;
  });

  const initData: InitDataProps[] = useMemo(() => {
    setResultKey(undefined);
    if (graphLine) {
      return graphLine.map((item, index) => {
        return {
          title: `路径${index + 1}`,
          children: getChildren(item),
        };
      });
    }
    return [];
  }, [graphLine]);

  const titleRender = (info: InitDataProps) => {
    return <div className={styles["title-render"]}>{info.title}</div>;
  };

  const renderItem = (info: InitDataProps) => {
    return (
      <AuditResultItem
        data={info.children}
        title={info.title}
        nodeId={nodeId}
        resultKey={resultKey}
        setResultKey={setResultKey}
      />
    );
  };

  return (
    <div className={styles["audit-result-box"]}>
      {message && (
        <div className={classNames(styles["message-box"])}>{message}</div>
      )}
      {/* 以下为折叠面板 */}
      <CollapseList
        type="output"
        onlyKey="title"
        list={initData}
        titleRender={titleRender}
        renderItem={renderItem}
        collapseProps={{
          activeKey,
          onChange: (v) => {
            setActiveKey(v);
          },
        }}
      />
    </div>
  );
};

interface FlowChartBoxProps {
  graph?: string;
  refresh: boolean;
  node_id?: string;
}

export const FlowChartBox: React.FC<FlowChartBoxProps> = (props) => {
  const { graph, refresh, node_id } = props;
  const svgBoxRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<any>(null);
  const [nodeId, setNodeId] = useState<string>();
  const styleNodeRef = useRef<string>();
  const idBoxRef = useRef<string>(`auditCodeFlowChart-${uuidv4()}`);

  const onElementStyle = useMemoizedFn((id, stroke, fill) => {
    // 获取 id 为 node 的元素
    const nodeElement = document.getElementById(id);

    if (nodeElement) {
      // 查找该元素下的所有 ellipse 标签
      const ellipses = nodeElement.getElementsByTagName("ellipse");

      // 遍历所有找到的 ellipse 标签，并添加样式
      for (let i = 0; i < ellipses.length; i++) {
        ellipses[i].style.stroke = stroke;
        ellipses[i].style.fill = fill;
      }
    }
  });

  // 初始默认样式
  const onInitSvgStyle = useMemoizedFn((id?: string) => {
    if (id) {
      const element = document.getElementById(idBoxRef.current);
      if (element) {
        const titles = element.getElementsByTagName("title");
        // 遍历所有 <title> 元素
        for (let i = 0; i < titles.length; i++) {
          if (titles[i].textContent === "n1") {
            // 获取匹配的 <title> 元素的父元素
            const parentElement = titles[i].parentElement;
            if (parentElement) {
              // 新增class用于屏蔽通用hover样式
              parentElement.classList.add("node-main");
              // 查找该元素下的所有 ellipse 标签
              const ellipses = parentElement.getElementsByTagName("ellipse");

              // 遍历所有找到的 ellipse 标签，并添加样式
              for (let i = 0; i < ellipses.length; i++) {
                ellipses[i].style.stroke = "#8863F7";
                ellipses[i].style.fill = "rgba(136, 99, 247, 0.10)";
              }
            }
            break; // 找到匹配的元素后停止遍历
          }
        }
      }
    }
  });

  // 更改SVG样式
  const onChangeSvgStyle = useMemoizedFn((id?: string) => {
    if (styleNodeRef.current) {
      onElementStyle(styleNodeRef.current, "black", "#ffffff");
    }
    if (id) {
      styleNodeRef.current = id;
      onElementStyle(styleNodeRef.current, "#f28b44", "#fbe7d9");
    }
  });

  const onEventListener = useMemoizedFn((event: any) => {
    const target = event.target;
    if (
      target &&
      target?.tagName === "text" &&
      (target.parentNode?.id || "").startsWith("node")
    ) {
      // target.parentNode.id
      const titleElement = target.parentNode.querySelector("title");
      if (titleElement) {
        const titleText = titleElement.textContent;
        // 本身节点不用点击展开详情
        if (titleText === node_id) return;
        if (titleText === nodeId) {
          setNodeId(undefined);
          onChangeSvgStyle();
        } else {
          setNodeId(titleText);
          onChangeSvgStyle(target.parentNode.id);
        }
      } else {
        message.error("获取节点信息失败");
      }
    }
  });

  useEffect(() => {
    if (!graph) return;
    instance().then((viz) => {
      const svg = viz.renderSVGElement(graph, {});
      svgRef.current = svg;

      svg.addEventListener("click", onEventListener);

      if (svgBoxRef.current) {
        // 清空所有子元素
        while (svgBoxRef.current.firstChild) {
          svgBoxRef.current.removeChild(svgBoxRef.current.firstChild);
        }
        // 新增svg子元素
        svgBoxRef.current.appendChild(svg);
        onInitSvgStyle(node_id);
      }
    });
  }, [graph]);

  const contentInfo = useMemo(() => {
    if (nodeId) {
      const result = getMapGraphInfoDetail(nodeId);
      return result;
    }
  }, [refresh, nodeId]);

  const firstOffsetRef = useRef<{ x: number; y: number }>();
  const [scale, setScale] = useState(1); // 初始缩放比例为1
  const [dragging, setDragging] = useState(false); // 是否正在拖动
  const [offset, setOffset] = useState({ x: 0, y: 0 }); // 鼠标拖动的偏移量

  // 放大
  const handleZoomIn = useMemoizedFn(() => {
    setScale((prevScale) => prevScale + 0.2); // 增加0.2的缩放比例
  });

  // 缩小
  const handleZoomOut = useMemoizedFn(() => {
    setScale((prevScale) => Math.max(0.2, prevScale - 0.2)); // 最小缩放比例为0.2
  });

  useUpdateEffect(() => {
    if (svgRef.current && svgBoxRef.current) {
      const svg = svgRef.current as SVGSVGElement;
      svg.style.transform = `scale(${scale})`;
      svgBoxRef.current.style.cursor = dragging ? "grabbing" : "grab";
      svg.style.position = "relative";
      svg.style.left = `${offset.x}px`;
      svg.style.top = `${offset.y}px`;
    }
  }, [scale, dragging, offset]);

  // 处理鼠标按下事件
  const handleMouseDown = (e) => {
    setDragging(true);
    firstOffsetRef.current = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    };
  };

  // 处理鼠标抬起事件
  const handleMouseUp = () => {
    setDragging(false);
    firstOffsetRef.current = undefined;
  };

  // 处理鼠标移动事件
  const handleMouseMove = useThrottleFn(
    (e) => {
      if (dragging && firstOffsetRef.current) {
        const newOffsetX = e.nativeEvent.offsetX;
        const newOffsetY = e.nativeEvent.offsetY;
        const firstX = firstOffsetRef.current.x;
        const firstY = firstOffsetRef.current.y;
        setOffset((prevOffset) => ({
          x: prevOffset.x + (newOffsetX - firstX),
          y: prevOffset.y + (newOffsetY - firstY),
        }));
      }
    },
    { wait: 200 }
  ).run;

  return (
    <div className={styles["flow-chart-box"]} id={idBoxRef.current}>
      <div className={styles["header"]}>
        <div className={styles["relative-box"]}>
          <div className={styles["absolute-box"]}>
            <div className={styles["title"]}>
              Syntax Flow 审计过程
              <Tooltip
                title={
                  <div>
                    <div>黑色箭头代表数据流分析路径</div>
                    <div>红色箭头代表跨数据流分析路径</div>
                    <div>紫色节点代表审计结果</div>
                  </div>
                }
              >
                <QuestionMarkCircleIcon />
              </Tooltip>
            </div>
            <div className={styles["extra"]}>
              <div className={styles["drawer-icon"]} onClick={handleZoomIn}>
                <OutlineZoominIcon />
              </div>
              <div className={styles["drawer-icon"]} onClick={handleZoomOut}>
                <OutlineZoomoutIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ cursor: "grab" }}
        className={styles["svg-box"]}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        ref={svgBoxRef}
      />
      {nodeId && (
        <div className={styles["root-detail"]}>
          <div className={styles["header"]}>
            <div className={styles["title"]}>节点信息</div>
            <div className={styles["extra"]}>
              <div
                className={styles["drawer-icon"]}
                onClick={() => {
                  setNodeId(undefined);
                  onChangeSvgStyle();
                }}
              >
                <OutlineXIcon />
              </div>
            </div>
          </div>
          <div className={styles["content"]}>
            {contentInfo && (
              <Tooltip placement="topLeft" title={contentInfo.code_range.url}>
                <div
                  className={classNames(
                    styles["url-box"],
                    "yakit-single-line-ellipsis"
                  )}
                >
                  {contentInfo.code_range.url}
                </div>
              </Tooltip>
            )}
            {contentInfo && (
              <div className={styles["ir-code-box"]}>
                {contentInfo?.ir_code}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export interface CodeRangeProps {
  url: string;
  start_column: number;
  start_line: number;
  end_column: number;
  end_line: number;
}

export interface GraphInfoProps {
  code_range: CodeRangeProps;
  source_code: string;
  node_id: string;
  ir_code: string;
}

interface RightSideBarProps {
  auditRightParams: AuditEmiterYakUrlProps | undefined;
  isShowAuditDetail: boolean;
  setShowAuditDetail: (v: boolean) => void;
  wrapClassName?: string;
}

export const RightAuditDetail: React.FC<RightSideBarProps> = (props) => {
  const { auditRightParams, isShowAuditDetail, setShowAuditDetail,wrapClassName } = props;
  const [graph, setGraph] = useState<string>();
  const [graphLine, setGraphLine] = useState<string[][]>();
  const [message, setMessage] = useState<string>("");
  const [nodeId, setNodeId] = useState<string>();
  const [refresh, setRefresh] = useState<boolean>(false);
  const [activeKey, setActiveKey] = useState<string | string[]>();

  useEffect(() => {
    if (isShowAuditDetail && auditRightParams) {
      initData(auditRightParams);
    }
  }, [isShowAuditDetail, auditRightParams]);

  const initData = useMemoizedFn(async (params: AuditEmiterYakUrlProps) => {
    try {
      clearMapGraphInfoDetail();
      const {body, url} = params
      const result = await loadAuditFromYakURLRaw(url,body);
      if (result && result.resources.length > 0) {
        result.resources[0].extra.forEach((item) => {
          if (item.key === "graph") {
            setGraph(item.value);
          }
          if (item.key === "graph_info") {
            try {
              let graph_info: GraphInfoProps[] = JSON.parse(item.value);
              graph_info.forEach((item) => {
                setMapGraphInfoDetail(item.node_id, item);
              });
            } catch (error) {}
          }
          if (item.key === "message") {
            setMessage(item.value);
          }
          if (item.key === "node_id") {
            setNodeId(item.value);
          }
          if (item.key === "graph_line") {
            try {
              let graph_info: string[][] = JSON.parse(item.value);
              // 当数量小于等于10条时默认第一级展开
              if (graph_info.length > 0 && graph_info.length <= 10) {
                const expendKey: string[] = graph_info.map(
                  (item, index) => `路径${index + 1}`
                );
                setActiveKey(expendKey);
              } else {
                setActiveKey(undefined);
              }
              setGraphLine(graph_info);
            } catch (error) {
              setGraphLine(undefined);
              setActiveKey(undefined);
            }
          }
        });
        setRefresh(!refresh);
      }
    } catch (error) {}
  });

  return (
    <div className={classNames(styles["right-audit-detail"],wrapClassName)}>
      <div className={styles["header"]}>
        <div className={styles["relative-box"]}>
          <div className={styles["absolute-box"]}>
            <div className={styles["title"]}>审计结果</div>
            <div className={styles["extra"]}>
              {(graphLine || []).length !== 0 && (
                <Tooltip title="一键收起">
                  <div
                    className={styles["drawer-icon"]}
                    onClick={() => {
                      setActiveKey(undefined);
                    }}
                  >
                    <OutlineCollectionIcon />
                  </div>
                </Tooltip>
              )}
              <div
                className={styles["drawer-icon"]}
                onClick={() => {
                  setShowAuditDetail(false);
                }}
              >
                <OutlineXIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["main"]}>
        <ResizeBox
          isVer={true}
          secondRatio={!isShowAuditDetail ? "0px" : undefined}
          lineDirection="bottom"
          firstRatio={"200px"}
          firstMinSize={140}
          firstNodeStyle={{ padding: 0 }}
          secondNodeStyle={{ padding: 0 }}
          secondMinSize={350}
          firstNode={
            <AuditResultBox
              activeKey={activeKey}
              setActiveKey={setActiveKey}
              graphLine={graphLine}
              message={message}
              nodeId={nodeId}
            />
          }
          secondNode={
            <FlowChartBox graph={graph} refresh={refresh} node_id={nodeId} />
          }
        />
      </div>
    </div>
  );
};
