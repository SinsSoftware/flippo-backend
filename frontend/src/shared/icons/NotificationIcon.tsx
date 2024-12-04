import type { IIconProps } from './types/IIconProps';

function NotificationIcon(props: IIconProps) {
  const { isDefaultFill, ...otherProps } = props;

  return (
    <svg
      fill={isDefaultFill ? 'currentColor' : '--neutral-80'}
      viewBox={'0 0 24 24'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...otherProps}
    >
      <path
        d={
          'M5 19C4.71667 19 4.47934 18.904 4.288 18.712C4.09667 18.52 4.00067 18.2827 4 18C3.99934 17.7173 4.09534 17.48 4.288 17.288C4.48067 17.096 4.718 17 5 17H6V10C6 8.61667 6.41667 7.38767 7.25 6.313C8.08334 5.23834 9.16667 4.534 10.5 4.2V3.5C10.5 3.08334 10.646 2.72934 10.938 2.438C11.23 2.14667 11.584 2.00067 12 2C12.416 1.99934 12.7703 2.14534 13.063 2.438C13.3557 2.73067 13.5013 3.08467 13.5 3.5V4.2C14.8333 4.53334 15.9167 5.23767 16.75 6.313C17.5833 7.38834 18 8.61734 18 10V17H19C19.2833 17 19.521 17.096 19.713 17.288C19.905 17.48 20.0007 17.7173 20 18C19.9993 18.2827 19.9033 18.5203 19.712 18.713C19.5207 18.9057 19.2833 19.0013 19 19H5ZM12 22C11.45 22 10.9793 21.8043 10.588 21.413C10.1967 21.0217 10.0007 20.5507 10 20H14C14 20.55 13.8043 21.021 13.413 21.413C13.0217 21.805 12.5507 22.0007 12 22ZM8 17H16V10C16 8.9 15.6083 7.95834 14.825 7.175C14.0417 6.39167 13.1 6 12 6C10.9 6 9.95834 6.39167 9.175 7.175C8.39167 7.95834 8 8.9 8 10V17Z'
        }
      />
    </svg>
  );
}

export { NotificationIcon };
