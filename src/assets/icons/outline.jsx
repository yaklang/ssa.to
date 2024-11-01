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

const OutlineChevronup = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 15L12 8L19 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
/**
 * @description  Icon/Outline/Outlinechevron-up
 */
export const OutlineChevronupIcon = (props) => {
  return <Icon component={OutlineChevronup} {...props} />;
};

const OutlineChevrondown = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 9L12 16L5 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
/**
 * @description  Icon/Outline/Outlinechevron-down
 */
export const OutlineChevrondownIcon = (props) => {
  return <Icon component={OutlineChevrondown} {...props} />;
};

const OutlineChevronright = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
          d='M9 5L16 12L9 19'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
      />
  </svg>
)
/**
* @description  Icon/Outline/Outlinechevron-right
*/
export const OutlineChevronrightIcon = (props) => {
  return <Icon component={OutlineChevronright} {...props} />
}

const OutlineLightbulb = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
          d='M9.66347 17H14.3364M11.9999 3V4M18.3639 5.63604L17.6568 6.34315M21 11.9999H20M4 11.9999H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46449C10.417 6.51187 13.5829 6.51187 15.5355 8.46449C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 13.9999 17.5739 13.9999 18.469V19C13.9999 20.1046 13.1045 21 11.9999 21C10.8954 21 9.99995 20.1046 9.99995 19V18.469C9.99995 17.5739 9.6444 16.7155 9.01151 16.0827L8.46441 15.5356Z'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
      />
  </svg>
)
/**
* @description  Icon/Outline/Outlinelight-bulb
*/
export const OutlineLightbulbIcon = (props) => {
  return <Icon component={OutlineLightbulb} {...props} />
}

const OutlineBug = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <mask
          id='mask0_1_3136'
          style={{maskType: "alpha"}}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='24'
          height='24'
      >
          <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_1_3136)'>
          <path
              d='M6.00012 10C6.00012 8.34315 7.34327 7 9.00012 7H15.0001C16.657 7 18.0001 8.34315 18.0001 10V15C18.0001 18.3137 15.3138 21 12.0001 21C8.68642 21 6.00012 18.3137 6.00012 15V10Z'
              stroke='currentColor'
              strokeWidth='1.5'
          />
          <path d='M12 21V7' stroke='currentColor' strokeWidth='1.5' />
          <path d='M2 13H5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
          <path d='M19 13H22' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
          <path
              d='M15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
          />
          <path d='M21 6C21 7.65685 19.6569 9 18 9' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
          <path d='M3 21C3 19.3431 4.34315 18 6 18' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
          <path d='M3 6C3 7.65685 4.34315 9 6 9' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
          <path
              d='M21 21C21 19.3431 19.6569 18 18 18'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
          />
      </g>
  </svg>
)
/**
* @description  Icon/Outline/Outlinebug
*/
export const OutlineBugIcon = (props) => {
  return <Icon component={OutlineBug} {...props} />
}


const SolidXcircle = () => (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z'
          fill='currentColor'
      />
  </svg>
)
/**
* @description  Icon/Solid/Solidx-circle
*/
export const SolidXcircleIcon = (props) => {
  return <Icon component={SolidXcircle} {...props} />
}

const SolidExclamation = () => (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.25694 3.09882C9.02154 1.73952 10.9786 1.73952 11.7432 3.09882L17.3235 13.0194C18.0735 14.3526 17.11 15.9999 15.5804 15.9999H4.41978C2.89013 15.9999 1.9267 14.3526 2.67663 13.0194L8.25694 3.09882ZM11 13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13ZM10 5C9.44772 5 9 5.44772 9 6V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V6C11 5.44772 10.5523 5 10 5Z'
          fill='currentColor'
      />
  </svg>
)
/**
* @description  Icon/Solid/Solidexclamation
*/
export const SolidExclamationIcon = (props) => {
  return <Icon component={SolidExclamation} {...props} />
}

const SolidInformationcircle = () => (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6ZM9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11V14C9 14.5523 9.44772 15 10 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13V10C11 9.44772 10.5523 9 10 9H9Z'
          fill='currentColor'
      />
  </svg>
)
/**
* @description  Icon/Solid/Solidinformation-circle
*/
export const SolidInformationcircleIcon = (props) => {
  return <Icon component={SolidInformationcircle} {...props} />
}

const OutlineDeprecated = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
          d='M23 12H1M20.1818 12C20.1818 16.4183 16.5187 20 12 20C7.48131 20 3.81818 16.4183 3.81818 12C3.81818 7.58172 7.48131 4 12 4C16.5187 4 20.1818 7.58172 20.1818 12Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
      />
  </svg>
)
/**
* @description  Icon/Outline/弃用
*/
export const OutlineDeprecatedIcon = (props) => {
  return <Icon component={OutlineDeprecated} {...props} />
}

const OutlineCollection = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
          d='M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
      />
  </svg>
)
/**
* @description  Icon/Outline/Outlinecollection
*/
export const OutlineCollectionIcon = (props) => {
  return <Icon component={OutlineCollection} {...props} />
}


const OutlineZoomin = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
          d='M21 21L15 15M10 7V10M10 10V13M10 10H13M10 10H7M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
      />
  </svg>
)
/**
* @description  Icon/Outline/Outlinezoom-in
*/
export const OutlineZoominIcon = (props) => {
  return <Icon component={OutlineZoomin} {...props} />
}

const OutlineZoomout = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
          d='M21 21L15 15M13 10H7M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
      />
  </svg>
)
/**
* @description  Icon/Outline/Outlinezoom-out
*/
export const OutlineZoomoutIcon = (props) => {
  return <Icon component={OutlineZoomout} {...props} />
}