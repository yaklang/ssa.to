import Icon from "@ant-design/icons";

const OutlineArrowright = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 5L21 12M21 12L14 19M21 12L3 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
/**
 * @description  Icon/Outline/Outlinearrow-right
 */
export const OutlineArrowrightIcon = (props) => {
  return <Icon component={OutlineArrowright} {...props} />;
};

const OutlinePlay2 = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.5708 11.1425C20.2182 11.5309 20.2182 12.4691 19.5708 12.8575L7.5145 20.0913C6.84797 20.4912 6 20.0111 6 19.2338L6 4.76619C6 3.98889 6.84797 3.50878 7.5145 3.9087L19.5708 11.1425Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);
/**
 * @description  Icon/Outline/Outlineplay2
 */
export const OutlinePlay2Icon = (props) => {
  return <Icon component={OutlinePlay2} {...props} />;
};

const OutlineQuestionmarkcircle = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.22766 9C8.77678 7.83481 10.2584 7 12.0001 7C14.2092 7 16.0001 8.34315 16.0001 10C16.0001 11.3994 14.7224 12.5751 12.9943 12.9066C12.4519 13.0106 12.0001 13.4477 12.0001 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);
/**
 * @description  Icon/Outline/Outlinequestion-mark-circle
 */
export const OutlineQuestionmarkcircleIcon = (props) => {
  return <Icon component={OutlineQuestionmarkcircle} {...props} />;
};

const OutlineStop = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V14C15 14.5523 14.5523 15 14 15H10C9.44772 15 9 14.5523 9 14V10Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
/**
 * @description  Icon/Outline/Outlinestop
 */
export const OutlineStopIcon = (props) => {
  return <Icon component={OutlineStop} {...props} />;
};

const Filter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M2.66675 3C2.66675 2.44772 3.11446 2 3.66675 2H12.3334C12.8857 2 13.3334 2.44772 13.3334 3V4.25245C13.3334 4.51767 13.2281 4.77202 13.0405 4.95956L9.62631 8.37377C9.43877 8.56131 9.33341 8.81566 9.33341 9.08088V12L6.66675 14V9.08088C6.66675 8.81566 6.56139 8.56131 6.37385 8.37377L2.95964 4.95956C2.7721 4.77202 2.66675 4.51767 2.66675 4.25245V3Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * @description: 筛选
 */
export const FilterIcon = (props) => {
  return <Icon component={Filter} {...props} />;
};

const SorterDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M4.66667 10.6666V2.66663M4.66667 2.66663L2 5.33329M4.66667 2.66663L7.33333 5.33329"
      stroke="#B4BBCA"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.3332 5.33337V13.3334M11.3332 13.3334L13.9998 10.6667M11.3332 13.3334L8.6665 10.6667"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * @description: 向下的箭头 排序
 */
export const SorterDownIcon = (props) => {
  return <Icon component={SorterDown} {...props} />;
};

const SorterUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M4.66667 10.6666V2.66663M4.66667 2.66663L2 5.33329M4.66667 2.66663L7.33333 5.33329"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.3332 5.33337V13.3334M11.3332 13.3334L13.9998 10.6667M11.3332 13.3334L8.6665 10.6667"
      stroke="#B4BBCA"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * @description: 向上的箭头 排序
 */
export const SorterUpIcon = (props) => {
  return <Icon component={SorterUp} {...props} />;
};

const DisableSorter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M4.66667 10.6666V2.66663M4.66667 2.66663L2 5.33329M4.66667 2.66663L7.33333 5.33329"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.3332 5.33337V13.3334M11.3332 13.3334L13.9998 10.6667M11.3332 13.3334L8.6665 10.6667"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * @description: 两个箭头颜色一样 排序
 */
export const DisableSorterIcon = (props) => {
  return <Icon component={DisableSorter} {...props} />;
};

const QuestionMarkCircle = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5ZM1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8ZM8.00004 5.16667C6.9739 5.16667 6.19859 5.65892 5.9374 6.21315C5.81968 6.46294 5.52175 6.57001 5.27196 6.45229C5.02216 6.33457 4.9151 6.03664 5.03282 5.78685C5.50378 4.78749 6.704 4.16667 8.00004 4.16667C8.83414 4.16667 9.60852 4.41961 10.1857 4.85245C10.7629 5.28542 11.1667 5.92172 11.1667 6.66667C11.1667 7.93458 10.0368 8.84995 8.75705 9.09545C8.67554 9.11108 8.60519 9.15161 8.55928 9.2002C8.51566 9.24636 8.50004 9.29187 8.50004 9.33333C8.50004 9.60948 8.27618 9.83333 8.00004 9.83333C7.72389 9.83333 7.50004 9.60948 7.50004 9.33333C7.50004 8.67024 8.03016 8.21665 8.56865 8.11335C9.59315 7.91682 10.1667 7.26467 10.1667 6.66667C10.1667 6.30705 9.97351 5.94335 9.58565 5.65245C9.19764 5.36144 8.63869 5.16667 8.00004 5.16667ZM7.5 11.3333C7.5 11.0572 7.72386 10.8333 8 10.8333H8.00667C8.28281 10.8333 8.50667 11.0572 8.50667 11.3333C8.50667 11.6095 8.28281 11.8333 8.00667 11.8333H8C7.72386 11.8333 7.5 11.6095 7.5 11.3333Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * @description:  问号 带圈
 */
export const QuestionMarkCircleIcon = (props) => {
  return <Icon component={QuestionMarkCircle} {...props} />;
};

const DragSort = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.2 3.59995C3.53726 3.59995 3 3.06269 3 2.39995C3 1.73721 3.53726 1.19995 4.2 1.19995C4.86274 1.19995 5.4 1.73721 5.4 2.39995C5.4 3.06269 4.86274 3.59995 4.2 3.59995Z"
      fill="currentColor"
    />
    <path
      d="M4.2 7.19995C3.53726 7.19995 3 6.66269 3 5.99995C3 5.33721 3.53726 4.79995 4.2 4.79995C4.86274 4.79995 5.4 5.33721 5.4 5.99995C5.4 6.66269 4.86274 7.19995 4.2 7.19995Z"
      fill="currentColor"
    />
    <path
      d="M4.2 10.8C3.53726 10.8 3 10.2627 3 9.59995C3 8.93721 3.53726 8.39995 4.2 8.39995C4.86274 8.39995 5.4 8.93721 5.4 9.59995C5.4 10.2627 4.86274 10.8 4.2 10.8Z"
      fill="currentColor"
    />
    <path
      d="M7.8001 3.59995C7.13736 3.59995 6.6001 3.06269 6.6001 2.39995C6.6001 1.73721 7.13736 1.19995 7.8001 1.19995C8.46284 1.19995 9.0001 1.73721 9.0001 2.39995C9.0001 3.06269 8.46284 3.59995 7.8001 3.59995Z"
      fill="currentColor"
    />
    <path
      d="M7.8001 7.19995C7.13736 7.19995 6.6001 6.66269 6.6001 5.99995C6.6001 5.33721 7.13736 4.79995 7.8001 4.79995C8.46284 4.79995 9.0001 5.33721 9.0001 5.99995C9.0001 6.66269 8.46284 7.19995 7.8001 7.19995Z"
      fill="currentColor"
    />
    <path
      d="M7.8001 10.8C7.13736 10.8 6.6001 10.2627 6.6001 9.59995C6.6001 8.93721 7.13736 8.39995 7.8001 8.39995C8.46284 8.39995 9.0001 8.93721 9.0001 9.59995C9.0001 10.2627 8.46284 10.8 7.8001 10.8Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * @description: 拖拽排序
 */
export const DragSortIcon = (props) => {
  return <Icon component={DragSort} {...props} />;
};

const Check = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.08333 5.41667L3.74999 7.08333L7.91666 2.91667"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * @description:Check 对勾
 */
export const CheckIcon = (props) => {
  return <Icon component={Check} {...props} />;
};

const OutlineExclamation = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 9V11M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="15" r="1" fill="currentColor" />
  </svg>
);
/**
 * @description  Icon/Outline/Outlineexclamation
 */
export const OutlineExclamationIcon = (props) => {
  return <Icon component={OutlineExclamation} {...props} />;
};

const OutlineX = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 18L18 6M6 6L18 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
/**
 * @description  Icon/Outline/Outlinex
 */
export const OutlineXIcon = (props) => {
  return <Icon component={OutlineX} {...props} />;
};

const OutlineSearch = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
/**
 * @description  Icon/Outline/Outlinesearch
 */
export const OutlineSearchIcon = (props) => {
  return <Icon component={OutlineSearch} {...props} />;
};

const OutlineHand = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 11.5V14M7 11.5V5.5C7 4.67157 7.67157 4 8.5 4C9.32843 4 10 4.67157 10 5.5M7 11.5C7 10.6716 6.32843 10 5.5 10C4.67157 10 4 10.6716 4 11.5V13.5C4 17.6421 7.35786 21 11.5 21C15.6421 21 19 17.6421 19 13.5V8.5C19 7.67157 18.3284 7 17.5 7C16.6716 7 16 7.67157 16 8.5M10 5.5V11M10 5.5V4.5C10 3.67157 10.6716 3 11.5 3C12.3284 3 13 3.67157 13 4.5V5.5M13 5.5V11M13 5.5C13 4.67157 13.6716 4 14.5 4C15.3284 4 16 4.67157 16 5.5V8.5M16 8.5V11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
/**
 * @description  Icon/Outline/Outlinehand
 */
export const OutlineHandIcon = (props) => {
  return <Icon component={OutlineHand} {...props} />;
};

const OutlineClock = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
/**
 * @description  Icon/Outline/Outlineclock
 */
export const OutlineClockIcon = (props) => {
  return <Icon component={OutlineClock} {...props} />;
};

const OutlineArrowsexpand = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 8V4M4 4H8M4 4L9 9M20 8V4M20 4H16M20 4L15 9M4 16V20M4 20H8M4 20L9 15M20 20L15 15M20 20V16M20 20H16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
/**
 * @description  Icon/Outline/Outlinearrows-expand
 */
export const OutlineArrowsexpandIcon = (props) => {
  return <Icon component={OutlineArrowsexpand} {...props} />;
};

const OutlineArrowscollapse = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 5V9M15 9H19M15 9L20 4M9 5V9M9 9H5M9 9L4 4M15 19V15M15 15H19M15 15L20 20M9 19V15M9 15H5M9 15L4 20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
/**
 * @description  Icon/Outline/Outlinearrows-收起
 */
export const OutlineArrowscollapseIcon = (props) => {
  return <Icon component={OutlineArrowscollapse} {...props} />;
};

const DocumentDuplicateSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.33335 4.66667V10C5.33335 10.7364 5.93031 11.3333 6.66669 11.3333H10.6667M5.33335 4.66667V3.33333C5.33335 2.59695 5.93031 2 6.66669 2H9.72388C9.90069 2 10.0703 2.07024 10.1953 2.19526L13.1381 5.13807C13.2631 5.2631 13.3334 5.43266 13.3334 5.60948V10C13.3334 10.7364 12.7364 11.3333 12 11.3333H10.6667M5.33335 4.66667H4.66669C3.56212 4.66667 2.66669 5.5621 2.66669 6.66667V12.6667C2.66669 13.403 3.26364 14 4.00002 14H8.66669C9.77126 14 10.6667 13.1046 10.6667 12V11.3333"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
/** @name 复制图标(document-duplicate) */
export const DocumentDuplicateSvgIcon = (props) => {
  return <Icon component={DocumentDuplicateSvg} {...props} />;
};
