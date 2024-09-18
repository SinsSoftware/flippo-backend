import { IIconProps } from "./types/IIconProps";

const LinkIcon = (props: IIconProps) => {
  const { isDefaultFill, ...otherProps } = props;

  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill={isDefaultFill ? "currentColor" : "--neutral-80"}
      {...otherProps}
    >
      <path d='M7 17C5.61667 17 4.43767 16.5123 3.463 15.537C2.48833 14.5617 2.00067 13.3827 2 12C1.99933 10.6173 2.487 9.43833 3.463 8.463C4.439 7.48767 5.618 7 7 7H10C10.2833 7 10.521 7.096 10.713 7.288C10.905 7.48 11.0007 7.71733 11 8C10.9993 8.28267 10.9033 8.52033 10.712 8.713C10.5207 8.90567 10.2833 9.00133 10 9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H10C10.2833 15 10.521 15.096 10.713 15.288C10.905 15.48 11.0007 15.7173 11 16C10.9993 16.2827 10.9033 16.5203 10.712 16.713C10.5207 16.9057 10.2833 17.0013 10 17H7ZM9 13C8.71667 13 8.47933 12.904 8.288 12.712C8.09667 12.52 8.00067 12.2827 8 12C7.99933 11.7173 8.09533 11.48 8.288 11.288C8.48067 11.096 8.718 11 9 11H15C15.2833 11 15.521 11.096 15.713 11.288C15.905 11.48 16.0007 11.7173 16 12C15.9993 12.2827 15.9033 12.5203 15.712 12.713C15.5207 12.9057 15.2833 13.0013 15 13H9ZM14 17C13.7167 17 13.4793 16.904 13.288 16.712C13.0967 16.52 13.0007 16.2827 13 16C12.9993 15.7173 13.0953 15.48 13.288 15.288C13.4807 15.096 13.718 15 14 15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H14C13.7167 9 13.4793 8.904 13.288 8.712C13.0967 8.52 13.0007 8.28267 13 8C12.9993 7.71733 13.0953 7.48 13.288 7.288C13.4807 7.096 13.718 7 14 7H17C18.3833 7 19.5627 7.48767 20.538 8.463C21.5133 9.43833 22.0007 10.6173 22 12C21.9993 13.3827 21.5117 14.562 20.537 15.538C19.5623 16.514 18.3833 17.0013 17 17H14Z' />
    </svg>
  );
};

export { LinkIcon };