import type { IIconProps } from './types/IIconProps';

function RedoIcon(props: IIconProps) {
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
          'M16.2 10H9.9C8.85 10 7.93733 10.3334 7.162 11C6.38667 11.6667 5.99933 12.5 6 13.5C6.00067 14.5 6.38833 15.3334 7.163 16C7.93767 16.6667 8.85 17 9.9 17H16C16.2833 17 16.521 17.096 16.713 17.288C16.905 17.48 17.0007 17.7174 17 18C16.9993 18.2827 16.9033 18.5204 16.712 18.713C16.5207 18.9057 16.2833 19.0014 16 19H9.9C8.28333 19 6.89567 18.475 5.737 17.425C4.57833 16.375 3.99933 15.0667 4 13.5C4.00067 11.9334 4.58 10.625 5.738 9.57505C6.896 8.52505 8.28333 8.00005 9.9 8.00005H16.2L14.3 6.10005C14.1167 5.91672 14.025 5.68338 14.025 5.40005C14.025 5.11672 14.1167 4.88338 14.3 4.70005C14.4833 4.51672 14.7167 4.42505 15 4.42505C15.2833 4.42505 15.5167 4.51672 15.7 4.70005L19.3 8.30005C19.4 8.40005 19.471 8.50838 19.513 8.62505C19.555 8.74172 19.5757 8.86672 19.575 9.00005C19.5743 9.13338 19.5537 9.25838 19.513 9.37505C19.4723 9.49172 19.4013 9.60005 19.3 9.70005L15.7 13.3C15.5167 13.4834 15.2833 13.575 15 13.575C14.7167 13.575 14.4833 13.4834 14.3 13.3C14.1167 13.1167 14.025 12.8834 14.025 12.6C14.025 12.3167 14.1167 12.0834 14.3 11.9L16.2 10Z'
        }
      />
    </svg>
  );
}

export { RedoIcon };
