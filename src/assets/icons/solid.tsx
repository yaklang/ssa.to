import Icon from "@ant-design/icons";

const SolidExclamation = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.25694 3.09882C9.02154 1.73952 10.9786 1.73952 11.7432 3.09882L17.3235 13.0194C18.0735 14.3526 17.11 15.9999 15.5804 15.9999H4.41978C2.89013 15.9999 1.9267 14.3526 2.67663 13.0194L8.25694 3.09882ZM11 13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13ZM10 5C9.44772 5 9 5.44772 9 6V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V6C11 5.44772 10.5523 5 10 5Z"
      fill="currentColor"
    />
  </svg>
);
/**
 * @description  Icon/Solid/Solidexclamation
 */
export const SolidExclamationIcon = (props) => {
  return <Icon component={SolidExclamation} {...props} />;
};

const SolidChatalt2 = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 5C2 3.89543 2.89543 3 4 3H11C12.1046 3 13 3.89543 13 5V9C13 10.1046 12.1046 11 11 11H9L6 14V11H4C2.89543 11 2 10.1046 2 9V5Z"
      fill="currentColor"
    />
    <path
      d="M15 7V9C15 11.2091 13.2091 13 11 13H9.82843L8.06173 14.7667C8.34154 14.9156 8.66091 15 9 15H11L14 18V15H16C17.1046 15 18 14.1046 18 13V9C18 7.89543 17.1046 7 16 7H15Z"
      fill="currentColor"
    />
  </svg>
);
/**
 * @description  Icon/Solid/Solidchat-alt-2
 */
export const SolidChatalt2Icon = (props) => {
  return <Icon component={SolidChatalt2} {...props} />;
};
