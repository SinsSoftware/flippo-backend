import type { IIconProps } from './types/IIconProps';

interface ListIconProps extends IIconProps {
  type?: 'order' | 'unorder';
}

const ListTypes = {
  order:
    'M3.75 22C3.53334 22 3.35434 21.929 3.213 21.787C3.07167 21.645 3.00067 21.466 3 21.25C2.99934 21.034 3.07034 20.855 3.213 20.713C3.35567 20.571 3.53467 20.5 3.75 20.5H5.5V19.75H4.75C4.53334 19.75 4.35434 19.679 4.213 19.537C4.07167 19.395 4.00067 19.216 4 19C3.99934 18.784 4.07034 18.605 4.213 18.463C4.35567 18.321 4.53467 18.25 4.75 18.25H5.5V17.5H3.75C3.53334 17.5 3.35434 17.429 3.213 17.287C3.07167 17.145 3.00067 16.966 3 16.75C2.99934 16.534 3.07034 16.355 3.213 16.213C3.35567 16.071 3.53467 16 3.75 16H6C6.28334 16 6.521 16.096 6.713 16.288C6.905 16.48 7.00067 16.7173 7 17V18C7 18.2833 6.904 18.521 6.712 18.713C6.52 18.905 6.28267 19.0007 6 19C6.28334 19 6.521 19.096 6.713 19.288C6.905 19.48 7.00067 19.7173 7 20V21C7 21.2833 6.904 21.521 6.712 21.713C6.52 21.905 6.28267 22.0007 6 22H3.75ZM3.75 15C3.53334 15 3.35434 14.929 3.213 14.787C3.07167 14.645 3.00067 14.466 3 14.25V12.25C3 11.9667 3.096 11.7293 3.288 11.538C3.48 11.3467 3.71734 11.2507 4 11.25H5.5V10.5H3.75C3.53334 10.5 3.35434 10.429 3.213 10.287C3.07167 10.145 3.00067 9.966 3 9.75C2.99934 9.534 3.07034 9.355 3.213 9.213C3.35567 9.071 3.53467 9 3.75 9H6C6.28334 9 6.521 9.096 6.713 9.288C6.905 9.48 7.00067 9.71733 7 10V11.75C7 12.0333 6.904 12.271 6.712 12.463C6.52 12.655 6.28267 12.7507 6 12.75H4.5V13.5H6.25C6.46667 13.5 6.646 13.571 6.788 13.713C6.93 13.855 7.00067 14.034 7 14.25C6.99934 14.466 6.92834 14.6453 6.787 14.788C6.64567 14.9307 6.46667 15.0013 6.25 15H3.75ZM5.25 8C5.03334 8 4.85434 7.929 4.713 7.787C4.57167 7.645 4.50067 7.466 4.5 7.25V3.5H3.75C3.53334 3.5 3.35434 3.429 3.213 3.287C3.07167 3.145 3.00067 2.966 3 2.75C2.99934 2.534 3.07034 2.355 3.213 2.213C3.35567 2.071 3.53467 2 3.75 2H5.25C5.46667 2 5.646 2.071 5.788 2.213C5.93 2.355 6.00067 2.534 6 2.75V7.25C6 7.46667 5.929 7.646 5.787 7.788C5.645 7.93 5.466 8.00067 5.25 8ZM10 19C9.71667 19 9.47934 18.904 9.288 18.712C9.09667 18.52 9.00067 18.2827 9 18C8.99934 17.7173 9.09534 17.48 9.288 17.288C9.48067 17.096 9.718 17 10 17H20C20.2833 17 20.521 17.096 20.713 17.288C20.905 17.48 21.0007 17.7173 21 18C20.9993 18.2827 20.9033 18.5203 20.712 18.713C20.5207 18.9057 20.2833 19.0013 20 19H10ZM10 13C9.71667 13 9.47934 12.904 9.288 12.712C9.09667 12.52 9.00067 12.2827 9 12C8.99934 11.7173 9.09534 11.48 9.288 11.288C9.48067 11.096 9.718 11 10 11H20C20.2833 11 20.521 11.096 20.713 11.288C20.905 11.48 21.0007 11.7173 21 12C20.9993 12.2827 20.9033 12.5203 20.712 12.713C20.5207 12.9057 20.2833 13.0013 20 13H10ZM10 7C9.71667 7 9.47934 6.904 9.288 6.712C9.09667 6.52 9.00067 6.28267 9 6C8.99934 5.71733 9.09534 5.48 9.288 5.288C9.48067 5.096 9.718 5 10 5H20C20.2833 5 20.521 5.096 20.713 5.288C20.905 5.48 21.0007 5.71733 21 6C20.9993 6.28267 20.9033 6.52033 20.712 6.713C20.5207 6.90567 20.2833 7.00133 20 7H10Z',
  unorder:
    'M10 19C9.71667 19 9.47934 18.904 9.288 18.712C9.09667 18.52 9.00067 18.2827 9 18C8.99934 17.7173 9.09534 17.48 9.288 17.288C9.48067 17.096 9.718 17 10 17H20C20.2833 17 20.521 17.096 20.713 17.288C20.905 17.48 21.0007 17.7173 21 18C20.9993 18.2827 20.9033 18.5203 20.712 18.713C20.5207 18.9057 20.2833 19.0013 20 19H10ZM10 13C9.71667 13 9.47934 12.904 9.288 12.712C9.09667 12.52 9.00067 12.2827 9 12C8.99934 11.7173 9.09534 11.48 9.288 11.288C9.48067 11.096 9.718 11 10 11H20C20.2833 11 20.521 11.096 20.713 11.288C20.905 11.48 21.0007 11.7173 21 12C20.9993 12.2827 20.9033 12.5203 20.712 12.713C20.5207 12.9057 20.2833 13.0013 20 13H10ZM10 7.00001C9.71667 7.00001 9.47934 6.90401 9.288 6.71201C9.09667 6.52001 9.00067 6.28267 9 6.00001C8.99934 5.71734 9.09534 5.48001 9.288 5.28801C9.48067 5.09601 9.718 5.00001 10 5.00001H20C20.2833 5.00001 20.521 5.09601 20.713 5.28801C20.905 5.48001 21.0007 5.71734 21 6.00001C20.9993 6.28267 20.9033 6.52034 20.712 6.71301C20.5207 6.90567 20.2833 7.00134 20 7.00001H10ZM5 20C4.45 20 3.97934 19.8043 3.588 19.413C3.19667 19.0217 3.00067 18.5507 3 18C2.99934 17.4493 3.19534 16.9787 3.588 16.588C3.98067 16.1973 4.45133 16.0013 5 16C5.54867 15.9987 6.01967 16.1947 6.413 16.588C6.80634 16.9813 7.002 17.452 7 18C6.998 18.548 6.80234 19.019 6.413 19.413C6.02367 19.807 5.55267 20.0027 5 20ZM5 14C4.45 14 3.97934 13.8043 3.588 13.413C3.19667 13.0217 3.00067 12.5507 3 12C2.99934 11.4493 3.19534 10.9787 3.588 10.588C3.98067 10.1973 4.45133 10.0013 5 10C5.54867 9.99867 6.01967 10.1947 6.413 10.588C6.80634 10.9813 7.002 11.452 7 12C6.998 12.548 6.80234 13.019 6.413 13.413C6.02367 13.807 5.55267 14.0027 5 14ZM5 8.00001C4.45 8.00001 3.97934 7.80434 3.588 7.41301C3.19667 7.02167 3.00067 6.55067 3 6.00001C2.99934 5.44934 3.19534 4.97867 3.588 4.58801C3.98067 4.19734 4.45133 4.00134 5 4.00001C5.54867 3.99867 6.01967 4.19467 6.413 4.58801C6.80634 4.98134 7.002 5.45201 7 6.00001C6.998 6.54801 6.80234 7.01901 6.413 7.41301C6.02367 7.80701 5.55267 8.00267 5 8.00001Z'
};

function ListIcon(props: ListIconProps) {
  const { isDefaultFill, type = 'unorder', ...otherProps } = props;

  return (
    <svg
      fill={isDefaultFill ? 'currentColor' : '--neutral-80'}
      viewBox={'0 0 24 24'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...otherProps}
    >
      <path d={ListTypes[type]} />
    </svg>
  );
}

export { ListIcon };