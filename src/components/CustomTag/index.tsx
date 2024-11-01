import { Tag } from "antd";
import React from "react";
import { CustomTagProps } from "./CustomTagType";
import { OutlineXIcon } from "@site/src/assets/icons/outline";
import clsx from "clsx";
import styles from "./styles.module.scss";

/**
 * @description: tag
 * @augments TagProps 继承antd的TagProps默认属性
 * @param {middle|large|small} size 默认middle 16 20 24
 * @param {"danger" | "info" | "success" | "warning"|"serious" |"yellow"| "purple" | "blue" | "cyan" | "bluePurple"} color 颜色
 * @param {boolean} disable
 */
export const CustomTag: React.FC<CustomTagProps> = (props) => {
  const { color, size, disable, className, ...restProps } = props;

  return (
    <Tag
      {...restProps}
      closeIcon={props.closeIcon || <OutlineXIcon />}
      closable={props.closable}
      className={clsx(
        styles["yakit-tag-middle"],
        {
          [styles["yakit-tag-small"]]: size === "small",
          [styles["yakit-tag-large"]]: size === "large",
          [styles["yakit-tag-danger"]]: color === "danger",
          [styles["yakit-tag-info"]]: color === "info",
          [styles["yakit-tag-success"]]:
            color === "success" || color === "green",
          [styles["yakit-tag-warning"]]: color === "warning",
          [styles["yakit-tag-serious"]]: color === "serious" || color === "red",
          [styles["yakit-tag-yellow"]]: color === "yellow",
          [styles["yakit-tag-purple"]]: color === "purple",
          [styles["yakit-tag-blue"]]: color === "blue",
          [styles["yakit-tag-cyan"]]: color === "cyan",
          [styles["yakit-tag-bluePurple"]]: color === "bluePurple",
          [styles["yakit-tag-white"]]: color === "white",
          [styles["yakit-tag-disable"]]: !!disable,
        },
        className
      )}
      onClose={(e) => {
        if (disable) return;
        if (props.onClose) props.onClose(e);
      }}
    >
      {props.children}
    </Tag>
  );
};
