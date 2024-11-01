import { TagProps } from "antd";

/**
 * @description CustomTagProps 的属性
 * @augments TagProps 继承antd的TagProps默认属性
 * @param {middle|large|small} size 默认middle
 * @param {"danger" | "info" | "success" | "warning" |"serious"|"yellow"| "purple" | "blue" | "cyan" | "bluePurple"|"white"} color 颜色
 * @param {boolean} disable
 */

export type CustomTagColor =
  | "danger"
  | "info"
  | "success"
  | "green"
  | "warning"
  | "serious"
  | "red"
  | "yellow"
  | "purple"
  | "blue"
  | "cyan"
  | "bluePurple"
  | "white";

export interface CustomTagProps extends Omit<TagProps, "color"> {
  size?: "small" | "middle" | "large" | "maxLarge" | undefined;
  color?: CustomTagColor;
  disable?: boolean;
  iconColor?: string;
}
