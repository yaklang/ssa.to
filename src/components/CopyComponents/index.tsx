import { useMemoizedFn } from "ahooks";
import { message } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import { DocumentDuplicateSvgIcon } from "@site/src/assets/icons/outline";

interface CopyComponentsProps {
  className?: string;
  onAfterCopy?: (e: MouseEvent) => void;
  copyText: string;
  iconColor?: string;
}
export const CopyComponents: React.FC<CopyComponentsProps> = (props) => {
  const { className, iconColor } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [isShowSure, setIsShowSure] = useState<boolean>(false);
  const onCopy = useMemoizedFn((e) => {
    e.stopPropagation();
    if (!props.copyText) return;
    setLoading(true);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(props.copyText)
        .then(() => {
          setLoading(false);
          setIsShowSure(true);
          setTimeout(() => {
            setIsShowSure(false);
          }, 2000);
          message.success("复制成功");
        })
        .catch((err) => {
          setLoading(false);
          console.error("Failed to copy text:", err);
        });
    } else {
      setLoading(false);
    }
    if (props.onAfterCopy) props.onAfterCopy(e);
  });
  return (
    <div
      className={clsx(styles["yakit-copy"], className || "")}
      onClick={onCopy}
    >
      {(loading && (
        <LoadingOutlined style={{ color: "var(--yakit-primary-5)" }} />
      )) || (
        <>
          {(isShowSure && (
            <CheckOutlined style={{ color: "var(--yakit-success-5)" }} />
          )) || (
            <DocumentDuplicateSvgIcon
              style={{ color: iconColor || "var(--yakit-primary-5)" }}
            />
          )}
        </>
      )}
    </div>
  );
};
