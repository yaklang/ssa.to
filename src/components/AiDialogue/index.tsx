import React, { useRef, useState } from "react";
import {
  OutlineArrowscollapseIcon,
  OutlineArrowsexpandIcon,
  OutlineClockIcon,
  OutlineXIcon,
} from "@site/src/assets/icons/outline";
import { Divider, Drawer, Tooltip } from "antd";
import { SolidChatalt2Icon } from "@site/src/assets/icons/solid";
import clsx from "clsx";
import { CustomTag } from "../CustomTag";
import styles from "./styles.module.scss";

interface AiDialogueProps<T> {
  title: string;
  sendQuery: T;
  showFullScreenBtn?: boolean;
  fullScreen?: boolean;
  onFullScreen?: () => void;
  onClose: () => void;
}

export const AiDialogue = <T,>(props: AiDialogueProps<T>) => {
  const {
    title,
    sendQuery,
    showFullScreenBtn = true,
    fullScreen = false,
    onFullScreen = () => {},
    onClose,
  } = props;
  const aiDialogueRef = useRef<HTMLDivElement>(null);
  const [historyOpen, setHistoryOpen] = useState(false);

  const showDrawer = () => {
    setHistoryOpen(true);
  };

  const onCloseHistory = () => {
    setHistoryOpen(false);
  };

  return (
    <div className={styles["aiDialogue"]} ref={aiDialogueRef} id="aiDialogue">
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
      <div className={styles["aiDialogue-answer"]}>
        <div className={styles["aiDialogue-answer-item"]}>
          <div className={styles["aiDialogue-answer-item-header"]}>
            <div className={styles["aiDialogue-answer-niuniu"]}>
              <img
                src={require("@site/static/img/yakniuniu.png").default}
                width={24}
              />
            </div>
            <div className={styles["aiDialogue-answer-time"]}>
              04/20/2023 17:08 PM
            </div>
          </div>
          <div className={styles["aiDialogue-answer-item-extra"]}>
            <CustomTag color="purple" closable={false}>
              • 01
            </CustomTag>
            <CustomTag color="blue" closable={false}>
              12323232
            </CustomTag>
          </div>
          <div className={styles["aiDialogue-answer-item-answer-cont"]}>
            123
          </div>
        </div>
      </div>
      <Drawer
        className={styles["history-drawer"]}
        title="历史记录"
        placement="bottom"
        closable={false}
        onClose={onCloseHistory}
        open={historyOpen}
        getContainer={false}
        extra={
          <OutlineXIcon
            className={styles["history-close-icon"]}
            onClick={onClose}
          />
        }
        rootStyle={{ position: "absolute" }}
      >
        <div className={styles["history-list"]}>
          <div className={styles["history-list-item"]}>
            <SolidChatalt2Icon
              className={styles["history-list-item-chat-icon"]}
            />
            <div className={styles["history-list-info"]}>
              <div
                className={clsx(
                  "text--truncate",
                  styles["history-list-item-title"]
                )}
              >
                [01] 我是标题
              </div>
              <div className={styles["history-list-item-time"]}>
                04/20/2023 17:08 PM
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
