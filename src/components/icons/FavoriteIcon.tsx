import { IIconProps } from "./types/IIconProps";

interface FavoriteIconProps extends IIconProps {
  type: "default" | "filled";
}

const FavoriteTypes = {
  default:
    "M12 20.3249C11.7667 20.3249 11.5293 20.2832 11.288 20.1999C11.0467 20.1166 10.834 19.9832 10.65 19.7999L8.925 18.2249C7.15833 16.6082 5.56233 15.0042 4.137 13.4129C2.71167 11.8216 1.99933 10.0672 2 8.1499C2 6.58324 2.525 5.2749 3.575 4.2249C4.625 3.1749 5.93333 2.6499 7.5 2.6499C8.38333 2.6499 9.21667 2.83724 10 3.2119C10.7833 3.58657 11.45 4.09924 12 4.7499C12.55 4.0999 13.2167 3.58757 14 3.2129C14.7833 2.83824 15.6167 2.65057 16.5 2.6499C18.0667 2.6499 19.375 3.1749 20.425 4.2249C21.475 5.2749 22 6.58324 22 8.1499C22 10.0666 21.2917 11.8249 19.875 13.4249C18.4583 15.0249 16.85 16.6332 15.05 18.2499L13.35 19.7999C13.1667 19.9832 12.9543 20.1166 12.713 20.1999C12.4717 20.2832 12.234 20.3249 12 20.3249ZM11.05 6.7499C10.5667 6.06657 10.05 5.54557 9.5 5.1869C8.95 4.82824 8.28333 4.64924 7.5 4.6499C6.5 4.6499 5.66667 4.98324 5 5.6499C4.33333 6.31657 4 7.1499 4 8.1499C4 9.01657 4.30833 9.93757 4.925 10.9129C5.54167 11.8882 6.27933 12.8339 7.138 13.7499C7.99667 14.6659 8.88 15.5242 9.788 16.3249C10.696 17.1256 11.4333 17.7839 12 18.2999C12.5667 17.7832 13.3043 17.1249 14.213 16.3249C15.1217 15.5249 16.005 14.6666 16.863 13.7499C17.721 12.8332 18.4583 11.8876 19.075 10.9129C19.6917 9.93824 20 9.01724 20 8.1499C20 7.1499 19.6667 6.31657 19 5.6499C18.3333 4.98324 17.5 4.6499 16.5 4.6499C15.7167 4.6499 15.05 4.82924 14.5 5.1879C13.95 5.54657 13.4333 6.06724 12.95 6.7499C12.8333 6.91657 12.6917 7.04157 12.525 7.1249C12.3583 7.20824 12.1833 7.2499 12 7.2499C11.8167 7.2499 11.6417 7.20824 11.475 7.1249C11.3083 7.04157 11.1667 6.91657 11.05 6.7499Z",
  filled:
    "M12 20.3249C11.7667 20.3249 11.5293 20.2832 11.288 20.1999C11.0467 20.1166 10.834 19.9832 10.65 19.7999L8.925 18.2249C7.15833 16.6082 5.56233 15.0042 4.137 13.4129C2.71167 11.8216 1.99933 10.0672 2 8.1499C2 6.58324 2.525 5.2749 3.575 4.2249C4.625 3.1749 5.93333 2.6499 7.5 2.6499C8.38333 2.6499 9.21667 2.83724 10 3.2119C10.7833 3.58657 11.45 4.09924 12 4.7499C12.55 4.0999 13.2167 3.58757 14 3.2129C14.7833 2.83824 15.6167 2.65057 16.5 2.6499C18.0667 2.6499 19.375 3.1749 20.425 4.2249C21.475 5.2749 22 6.58324 22 8.1499C22 10.0666 21.2917 11.8249 19.875 13.4249C18.4583 15.0249 16.85 16.6332 15.05 18.2499L13.35 19.7999C13.1667 19.9832 12.9543 20.1166 12.713 20.1999C12.4717 20.2832 12.234 20.3249 12 20.3249Z"
};

const FavoriteIcon = (props: FavoriteIconProps) => {
  const { isDefaultFill, type = "default", ...otherProps } = props;

  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill={isDefaultFill ? "currentColor" : "--neutral-80"}
      {...otherProps}
    >
      <path d={FavoriteTypes[type]} />
    </svg>
  );
};

export { FavoriteIcon };