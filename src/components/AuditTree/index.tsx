import { useInViewport, useMemoizedFn, useSize } from "ahooks";
import { Tooltip, Tree } from "antd";
import classNames from "classnames";
import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles.module.scss";
import {
  CodeRangeProps,
  YakURLKVPair,
} from "@site/src/pages/codeAnalysis/_codeDetailDrawer/CodeDetailDrawer";
import {
  OutlineBugIcon,
  OutlineChevronrightIcon,
  OutlineDeprecatedIcon,
  SolidExclamationIcon,
  SolidInformationcircleIcon,
  SolidXcircleIcon,
} from "@site/src/assets/icons/outline";
import { LoadingOutlined } from "@ant-design/icons";

export interface FileNodeProps {
  /** 父文件路径 */
  parent: string | null;
  /** 文件名 */
  name: string;
  /** 文件绝对路径 */
  path: string;
  /** 是否为文件夹 */
  isFolder: boolean;
  /** 显示icon */
  icon: string;
  // 是否新建
  isCreate?: boolean;
  // 层级
  depth: number;
  // 底部占位
  isBottom?: boolean;
  isLeaf?: boolean;
  children?: FileNodeProps[];
}

export interface AuditNodeProps {
  /** 父路径 */
  parent: string | null;
  /** id */
  id: string;
  // 层级
  depth: number;
  // 可能存在的名称
  name: string;
  // 底部占位
  isBottom?: boolean;
  isLeaf?: boolean;
  children?: AuditNodeProps[];

  extra: YakURLKVPair[];
  resource_type: string;
  verbose_type: string;
  size: number;
}

export interface AuditTreeProps {
  data: AuditNodeProps[];
  expandedKeys: string[];
  setExpandedKeys: (v: string[]) => void;
  onLoadData: (node: AuditNodeProps) => Promise<any>;
  foucsedKey: string;
  setFoucsedKey: (v: string) => void;
  onJump: (v: AuditNodeProps) => void;
  onlyJump?: boolean;
  wrapClassName?: string;
  bugId?: string;
}

export const AuditTree: React.FC<AuditTreeProps> = memo((props) => {
  const {
    data,
    expandedKeys,
    setExpandedKeys,
    onLoadData,
    foucsedKey,
    setFoucsedKey,
    onJump,
    onlyJump,
    wrapClassName,
    bugId,
  } = props;
  const treeRef = useRef<any>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const [inViewport] = useInViewport(wrapper);
  const size = useSize(wrapper);

  const handleSelect = useMemoizedFn(
    (
      selected: boolean,
      node: AuditNodeProps,
      detail?: AuditNodeDetailProps
    ) => {
      if (onlyJump) {
        onJump(node);
        return;
      }
    }
  );

  const handleExpand = useMemoizedFn(
    (expanded: boolean, node: AuditNodeProps) => {
      let arr = [...expandedKeys];
      if (expanded) {
        arr = arr.filter((item) => item !== node.id);
      } else {
        arr = [...arr, node.id];
      }
      setFoucsedKey(node.id);
      setExpandedKeys([...arr]);
    }
  );

  return (
    <div
      ref={wrapper}
      className={classNames(styles["audit-tree"], wrapClassName)}
    >
      <Tree
        ref={treeRef}
        height={size?.height}
        fieldNames={{ title: "name", key: "id", children: "children" }}
        treeData={data}
        blockNode={true}
        switcherIcon={<></>}
        // multiple={true}
        expandedKeys={expandedKeys}
        loadData={onLoadData}
        // 解决重复打开一个节点时 能加载
        loadedKeys={[]}
        titleRender={(nodeData) => {
          return (
            <AuditTreeNode
              info={nodeData}
              foucsedKey={foucsedKey}
              expandedKeys={expandedKeys}
              onSelected={handleSelect}
              onExpanded={handleExpand}
              setFoucsedKey={setFoucsedKey}
              onJump={onJump}
              bugId={bugId}
            />
          );
        }}
      />
    </div>
  );
});

export const getDetailFun = (info: AuditNodeProps) => {
  try {
    if (info.resource_type === "value") {
      const arr = info.extra.filter((item) => item.key === "code_range");
      if (arr.length > 0) {
        const item: CodeRangeProps = JSON.parse(arr[0].value);
        const { url, start_line, start_column, end_line, end_column } = item;
        const lastSlashIndex = url.lastIndexOf("/");
        const fileName = url.substring(lastSlashIndex + 1);
        return {
          fileName,
          start_line,
          start_column,
          end_line,
          end_column,
          url,
        };
      }
    }
    return undefined;
  } catch (error) {}
};

export const isBugFun = (info: AuditNodeProps) => {
  try {
    const arr = info.extra.filter((item) => item.key === "risk_hash");
    if (
      info.resource_type === "variable" &&
      info.verbose_type === "alert" &&
      arr.length > 0
    )
      return true;
    return false;
  } catch (error) {
    return false;
  }
};

export interface AuditNodeDetailProps {
  fileName: string;
  start_line: number;
  url: string;
}

export interface AuditTreeNodeProps {
  info: AuditNodeProps;
  expandedKeys: string[];
  onSelected: (
    selected: boolean,
    node: AuditNodeProps,
    nodeDetail?: AuditNodeDetailProps
  ) => any;
  onExpanded: (expanded: boolean, node: AuditNodeProps) => void;
  foucsedKey: string;
  setFoucsedKey: (v: string) => void;
  onJump: (info: AuditNodeProps) => void;
  bugId?: string;
}

export const AuditTreeNode: React.FC<AuditTreeNodeProps> = memo((props) => {
  const {
    info,
    foucsedKey,
    setFoucsedKey,
    onSelected,
    onExpanded,
    expandedKeys,
    onJump,
    bugId,
  } = props;
  const handleSelect = useMemoizedFn(() => {
    onSelected(true, info, getDetail);
  });

  const isExpanded = useMemo(() => {
    return expandedKeys.includes(info.id);
  }, [expandedKeys, info.id]);

  const handleExpand = useMemoizedFn(() => {
    onExpanded(isExpanded, info);
  });

  const handleClick = useMemoizedFn(() => {
    if (info.isLeaf) {
      handleSelect();
    } else {
      handleExpand();
    }
  });

  const isFoucsed = useMemo(() => {
    return foucsedKey === info.id;
  }, [foucsedKey, info.id]);

  const showIcon = useMemoizedFn((severity) => {
    switch (severity) {
      case "hint":
        return (
          <div className={classNames(styles["hint-icon"], styles["icon-box"])}>
            <OutlineDeprecatedIcon />
          </div>
        );
      case "info":
        return (
          <div className={classNames(styles["info-icon"], styles["icon-box"])}>
            <SolidInformationcircleIcon />
          </div>
        );
      case "warning":
        return (
          <div className={classNames(styles["warn-icon"], styles["icon-box"])}>
            <SolidExclamationIcon />
          </div>
        );
      case "error":
        return (
          <div className={classNames(styles["error-icon"], styles["icon-box"])}>
            <SolidXcircleIcon />
          </div>
        );

      default:
        return <></>;
    }
  });

  // 获取详情
  const getDetail = useMemo(() => {
    return getDetailFun(info);
  }, [info]);

  const goBUGDetail = useMemoizedFn((e) => {
    e.stopPropagation();
    onJump(info);
  });
  return (
    <>
      {info.isBottom ? (
        <div className={styles["tree-bottom"]}>{info.name}</div>
      ) : (
        <div
          className={classNames(styles["audit-tree-node"], {
            [styles["node-foucsed"]]: isFoucsed,
          })}
          style={{ paddingLeft: (info.depth - 1) * 16 + 8 }}
          onClick={handleClick}
        >
          {!info.isLeaf && (
            <div
              className={classNames(styles["node-switcher"], {
                [styles["expanded"]]: isExpanded,
              })}
            >
              <OutlineChevronrightIcon />
            </div>
          )}
          {info.resource_type === "message" && showIcon(info.verbose_type)}

          <div className={styles["node-loading"]}>
            <LoadingOutlined />
          </div>

          <div className={styles["node-content"]}>
            <div className={classNames(styles["content-body"])}>
              <div
                className={classNames(
                  styles["name"],
                  styles["yakit-content-single-ellipsis"]
                )}
              >
                {info.name}
              </div>

              {getDetail && (
                <div
                  className={classNames(
                    styles["detail"],
                    styles["yakit-content-single-ellipsis"]
                  )}
                >
                  Ln:{getDetail.start_line},Col:{getDetail.start_column}
                </div>
              )}
            </div>
            {/* {isBugFun(info) && (
                            <div
                                className={classNames(styles["bug"], {
                                    [styles["active-bug"]]: bugId === info.id
                                })}
                                onClick={goBUGDetail}
                            >
                                <OutlineBugIcon />
                            </div>
                        )} */}
            {info.resource_type === "variable" && (
              <div className={styles["count"]}>{info.size}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
});
