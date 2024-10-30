import React, { useEffect, useRef, useState } from "react";
import {
  OutlineArrowscollapseIcon,
  OutlineArrowsexpandIcon,
  OutlineClockIcon,
  OutlineStopIcon,
  OutlineXIcon,
} from "@site/src/assets/icons/outline";
import { Button, Divider, Drawer, Tooltip } from "antd";
import { SolidChatalt2Icon } from "@site/src/assets/icons/solid";
import clsx from "clsx";
import { CustomTag } from "../CustomTag";
import {
  AiDialogueExtraInfo,
  AiDialogueReq,
} from "@site/src/pages/codeAnalysis";
import { useDebounceEffect, useMemoizedFn, useUpdateEffect } from "ahooks";
import moment from "moment";
import { sessionStorageUtil } from "@site/src/utils";
import { ChatMarkdown } from "../ChatMarkdown";
import styles from "./styles.module.scss";

interface Answer {
  info: AiDialogueExtraInfo;
  content: string;
}
interface AiDialogueProps {
  title: string;
  wsUrl: string;
  sendQuery?: AiDialogueReq;
  extraInfo?: AiDialogueExtraInfo;
  showFullScreenBtn?: boolean;
  fullScreen?: boolean;
  onFullScreen?: () => void;
  onClose: () => void;
}

export const AiDialogue: React.FC<AiDialogueProps> = React.memo((props) => {
  const {
    title,
    wsUrl = "",
    sendQuery,
    extraInfo,
    showFullScreenBtn = true,
    fullScreen = false,
    onFullScreen = () => {},
    onClose,
  } = props;

  const [ws, setWs] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const messageQueueRef = useRef<string[]>([]);
  const [answerList, setAnswerList] = useState<Answer[]>([]);
  const timeIntervalRef = useRef<any>(null);
  const [refresh, setRefresh] = useState<boolean>(false); // 刷新
  const aiDialogueAnswerRef = useRef<HTMLDivElement>(null);
  const endOfMessagesRef = useRef<HTMLDivElement>(null); // 用于触发滚动到底部的元素
  const scrollTimeoutRef = useRef<any>(null);
  const isAtBottomRef = useRef<boolean>(false); // 是否滚动到底部
  const itemRefs = useRef<HTMLDivElement | null[]>([]); // 数组存储每个 item 的 ref

  useEffect(() => {
    const saveAnswerList = sessionStorageUtil.getItem("ssa-answerlist");
    if (saveAnswerList) {
      setAnswerList(saveAnswerList);
    } else {
      setAnswerList([]);
    }
    return () => {
      stopAnalysis();
    };
  }, []);

  useEffect(() => {
    sessionStorageUtil.setItem("ssa-answerlist", answerList);
  }, [answerList]);

  // 在用户滚动时检测是否在底部
  const handleScroll = () => {
    if (scrollTimeoutRef.current) return;
    scrollTimeoutRef.current = requestAnimationFrame(() => {
      if (!aiDialogueAnswerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } =
        aiDialogueAnswerRef.current;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 50;
      isAtBottomRef.current = atBottom;
      scrollTimeoutRef.current = null;
    });
  };

  useUpdateEffect(() => {
    if (isConnected) {
      // 清除已有的定时器
      if (timeIntervalRef.current) {
        clearInterval(timeIntervalRef.current);
        timeIntervalRef.current = null;
      }
      // 自动滚动到最后
      if (isAtBottomRef.current && !historyOpen) {
        endOfMessagesRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }
      // 启动定时器
      timeIntervalRef.current = setInterval(processMessages, 150);
      setRefresh((prev) => !prev);
    }
  }, [isConnected]);

  const processMessages = useMemoizedFn(() => {
    if (messageQueueRef.current.length > 0) {
      setAnswerList((prevList) => {
        const updatedList = [...prevList];
        const lastItem = { ...updatedList[updatedList.length - 1] };

        // 获取并删除队列的第一个元素
        const nextMessage = messageQueueRef.current.shift();
        lastItem.content += nextMessage;
        lastItem.info.time = moment().format("YYYY-MM-DD HH:mm:ss");

        updatedList[updatedList.length - 1] = lastItem;

        // 自动滚动到最后
        if (isAtBottomRef.current && !historyOpen) {
          endOfMessagesRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }
        return updatedList;
      });
    } else {
      // 如果队列为空，则清除定时器等待新的数据到达时再重新启动
      clearInterval(timeIntervalRef.current);
      timeIntervalRef.current = null;
      setRefresh((prev) => !prev);
    }
  });

  useDebounceEffect(
    () => {
      if (!wsUrl) {
        console.error("WebSocket URL 未定义");
        return;
      }
      onCloseHistory();

      if (sendQuery && extraInfo) {
        isAtBottomRef.current = true;
        if (timeIntervalRef.current) {
          stopAnalysis();
          // 上次回答未结束
          updateAnswerList("", extraInfo);
        } else {
          stopAnalysis();
          // 上次回答结束，新追加
          setAnswerList((prevList) => [
            ...prevList,
            { info: extraInfo, content: "" },
          ]);
        }

        const socket = new WebSocket(`${wsUrl}/ai_analysis`);
        socket.onopen = () => {
          setIsConnected(true);
          socket.send(JSON.stringify(sendQuery));
        };
        socket.onmessage = (event) => {
          try {
            const res = JSON.parse(event.data);
            if (res.error) {
              stopAnalysis();
              updateAnswerList("请求出现错误，请稍候再试。");
            } else if (res.message) {
              messageQueueRef.current.push(res.message);

              // 如果没有定时器，重新启动
              if (!timeIntervalRef.current) {
                timeIntervalRef.current = setInterval(processMessages, 150);
                setRefresh((prev) => !prev);
              }
            }
          } catch (error) {
            stopAnalysis();
            updateAnswerList("请求出现错误，请稍候再试。");
          }
        };
        socket.onclose = () => {
          setIsConnected(false);
        };
        socket.onerror = (error) => {
          setIsConnected(false);
          stopAnalysis();
          updateAnswerList("请求出现错误，请稍候再试。");
          console.error(error);
        };
        setWs(socket);
      } else {
        stopAnalysis();
        if (answerList.length) {
          updateAnswerList("Cancelled on client");
        }
      }
    },
    [wsUrl, sendQuery, extraInfo],
    { wait: 300 }
  );

  const stopAnalysis = useMemoizedFn(() => {
    if (ws) {
      ws.close();
      setWs(null);
      setIsConnected(false);
    }
    if (timeIntervalRef.current) {
      clearInterval(timeIntervalRef.current);
      timeIntervalRef.current = null;
      setRefresh((prev) => !prev);
    }
  });

  const updateAnswerList = (content: string, info?: AiDialogueExtraInfo) => {
    setAnswerList((prevList) => {
      const updatedList = [...prevList];
      const lastItem = { ...updatedList[updatedList.length - 1] };
      if (lastItem.content === "" || content === "") {
        lastItem.content = content;
      }
      if (info) {
        lastItem.info = info;
      }
      lastItem.info.time = moment().format("YYYY-MM-DD HH:mm:ss");
      updatedList[updatedList.length - 1] = lastItem;
      return updatedList;
    });
  };

  const [historyOpen, setHistoryOpen] = useState(false);
  const [saveAnswerList, setSaveAnswerList] = useState<Answer[]>([]);
  const showDrawer = () => {
    setHistoryOpen(true);
    const saveAnswerList = sessionStorageUtil.getItem("ssa-answerlist");
    setSaveAnswerList(saveAnswerList || []);
  };
  const onCloseHistory = () => {
    setHistoryOpen(false);
  };
  // 滚动到指定索引位置
  const scrollToIndex = (index: number) => {
    const targetElement = itemRefs.current[index];
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={styles["aiDialogue"]}>
      <div
        className={styles["aiDialogue-header"]}
        style={{ paddingLeft: fullScreen ? 16 : 8 }}
      >
        <div className={styles["aiDialogue-header-left"]}>
          <img src={require("@site/static/img/yak.png").default} width={32} />
          <span className={styles["aiDialogue-header-text"]}>{title}</span>
        </div>
        <div className={styles["aiDialogue-header-right"]}>
          <Tooltip title="会话历史记录">
            <OutlineClockIcon
              className={styles["aiDialogue-header-icon"]}
              onClick={showDrawer}
            />
          </Tooltip>
          <Divider type="vertical" />
          {showFullScreenBtn ? (
            <>
              {fullScreen ? (
                <OutlineArrowscollapseIcon
                  className={styles["aiDialogue-header-icon"]}
                  style={{ marginRight: 16 }}
                  onClick={onFullScreen}
                />
              ) : (
                <OutlineArrowsexpandIcon
                  className={styles["aiDialogue-header-icon"]}
                  style={{ marginRight: 16 }}
                  onClick={onFullScreen}
                />
              )}
            </>
          ) : null}

          <OutlineXIcon
            className={styles["aiDialogue-header-icon"]}
            onClick={onClose}
          />
        </div>
      </div>
      <div
        className={styles["aiDialogue-answer"]}
        ref={aiDialogueAnswerRef}
        onScroll={handleScroll}
      >
        {answerList.map((item, index) => (
          <div
            className={styles["aiDialogue-answer-item"]}
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
          >
            <div className={styles["aiDialogue-answer-item-header"]}>
              <div className={styles["aiDialogue-answer-item-header-left"]}>
                <div className={styles["aiDialogue-answer-niuniu"]}>
                  <img
                    src={require("@site/static/img/yakniuniu.png").default}
                    width={24}
                  />
                </div>
                <div className={styles["aiDialogue-answer-time"]}>
                  {item.info.time}
                </div>
              </div>
              {(isConnected || timeIntervalRef.current) &&
                index + 1 === answerList.length && (
                  <Button
                    type="primary"
                    danger
                    onClick={() => {
                      stopAnalysis();
                      updateAnswerList("Cancelled on client");
                    }}
                    icon={<OutlineStopIcon />}
                    iconPosition="end"
                    style={{ padding: "4px 8px", fontSize: 12 }}
                  >
                    停止
                  </Button>
                )}
            </div>
            <div className={styles["aiDialogue-answer-item-extra"]}>
              <CustomTag color="purple" closable={false}>
                • {item.info.index}
              </CustomTag>
              <CustomTag color="blue" closable={false}>
                {item.info.title.length > 40
                  ? `${item.info.title.slice(0, 40)}...`
                  : item.info.title}
              </CustomTag>
            </div>
            <div className={styles["aiDialogue-answer-item-answer-cont"]}>
              {item.content.length > 0 ? (
                <ChatMarkdown content={item.content} />
              ) : (
                <div className={styles["loading-wrapper"]}>
                  <div
                    className={clsx(
                      styles["loading-style"],
                      styles["loading-dot-before"]
                    )}
                  ></div>
                  <div
                    className={clsx(
                      styles["loading-style"],
                      styles["loading-dot"]
                    )}
                  ></div>
                  <div
                    className={clsx(
                      styles["loading-style"],
                      styles["loading-dot-after"]
                    )}
                  ></div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={endOfMessagesRef} />
      </div>
      {historyOpen && (
        <Drawer
          className={styles["history-drawer"]}
          title="历史记录"
          placement="bottom"
          closable={false}
          open={historyOpen}
          getContainer={false}
          extra={
            <OutlineXIcon
              className={styles["history-close-icon"]}
              onClick={onCloseHistory}
            />
          }
          rootStyle={{
            position: "absolute",
          }}
        >
          <div className={styles["history-list"]}>
            {saveAnswerList.map((item, index) => (
              <div
                className={styles["history-list-item"]}
                key={index}
                onClick={() => {
                  scrollToIndex(index);
                  setTimeout(() => {
                    onCloseHistory();
                  }, 50);
                }}
              >
                <SolidChatalt2Icon
                  className={styles["history-list-item-chat-icon"]}
                />
                <div className={styles["history-list-info"]}>
                  <div
                    className={clsx(
                      "text--truncate",
                      styles["history-list-item-title"]
                    )}
                    title={item.info.title}
                  >
                    [{item.info.index}] {item.info.title}
                  </div>
                  <div className={styles["history-list-item-time"]}>
                    {item.info.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Drawer>
      )}
    </div>
  );
});
