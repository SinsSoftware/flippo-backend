import type { IIconProps } from './types/IIconProps';

interface PersonIconProps extends IIconProps {
  type?: 'check' | 'checkFilled' | 'edit' | 'editFilled';
}

const PersonTypes = {
  check:
    'M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V17.2C2 16.65 2.14167 16.1333 2.425 15.65C2.70833 15.1667 3.1 14.8 3.6 14.55C4.45 14.1167 5.40833 13.75 6.475 13.45C7.54167 13.15 8.71667 13 10 13C10.1333 13 10.2833 13.0043 10.45 13.013C10.6167 13.0217 10.7667 13.034 10.9 13.05C11.1667 13.0833 11.3873 13.2083 11.562 13.425C11.7367 13.6417 11.8077 13.8833 11.775 14.15C11.7417 14.3833 11.6417 14.5833 11.475 14.75C11.3083 14.9167 11.0833 15 10.8 15H10C8.81667 15 7.754 15.1417 6.812 15.425C5.87 15.7083 5.09933 16.0167 4.5 16.35C4.35 16.4333 4.229 16.55 4.137 16.7C4.045 16.85 3.99933 17.0167 4 17.2V18H10.75C11.0333 18 11.271 18.096 11.463 18.288C11.655 18.48 11.7507 18.7173 11.75 19C11.7493 19.2827 11.6533 19.5203 11.462 19.713C11.2707 19.9057 11.0333 20.0013 10.75 20H4ZM15.55 17.6L19.9 13.25C20.0833 13.0667 20.3167 12.975 20.6 12.975C20.8833 12.975 21.1167 13.0667 21.3 13.25C21.4833 13.4333 21.575 13.6667 21.575 13.95C21.575 14.2333 21.4833 14.4667 21.3 14.65L16.25 19.7C16.05 19.9 15.8167 20 15.55 20C15.2833 20 15.05 19.9 14.85 19.7L12.8 17.65C12.6167 17.4667 12.525 17.2333 12.525 16.95C12.525 16.6667 12.6167 16.4333 12.8 16.25C12.9833 16.0667 13.2167 15.975 13.5 15.975C13.7833 15.975 14.0167 16.0667 14.2 16.25L15.55 17.6ZM10 12C8.9 12 7.95833 11.6083 7.175 10.825C6.39167 10.0417 6 9.1 6 8C6 6.9 6.39167 5.95833 7.175 5.175C7.95833 4.39167 8.9 4 10 4C11.1 4 12.0417 4.39167 12.825 5.175C13.6083 5.95833 14 6.9 14 8C14 9.1 13.6083 10.0417 12.825 10.825C12.0417 11.6083 11.1 12 10 12ZM10 10C10.55 10 11.021 9.80433 11.413 9.413C11.805 9.02167 12.0007 8.55067 12 8C11.9993 7.44933 11.8037 6.97867 11.413 6.588C11.0223 6.19733 10.5513 6.00133 10 6C9.44867 5.99867 8.978 6.19467 8.588 6.588C8.198 6.98133 8.002 7.452 8 8C7.998 8.548 8.194 9.019 8.588 9.413C8.982 9.807 9.45267 10.0027 10 10Z',
  checkFilled:
    'M10 12C8.9 12 7.95833 11.6083 7.175 10.825C6.39167 10.0417 6 9.1 6 8C6 6.9 6.39167 5.95833 7.175 5.175C7.95833 4.39167 8.9 4 10 4C11.1 4 12.0417 4.39167 12.825 5.175C13.6083 5.95833 14 6.9 14 8C14 9.1 13.6083 10.0417 12.825 10.825C12.0417 11.6083 11.1 12 10 12ZM4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V17.2C2 16.65 2.14167 16.1333 2.425 15.65C2.70833 15.1667 3.1 14.8 3.6 14.55C4.45 14.1167 5.40833 13.75 6.475 13.45C7.54167 13.15 8.71667 13 10 13H10.663C10.871 13 11.0833 13.0167 11.3 13.05C11.6333 13.0833 11.85 13.2583 11.95 13.575C12.05 13.8917 11.9833 14.1667 11.75 14.4L11.325 14.825C10.8083 15.3417 10.5167 15.95 10.45 16.65C10.3833 17.35 10.5417 17.9917 10.925 18.575C11.125 18.8917 11.154 19.2083 11.012 19.525C10.87 19.8417 10.6327 20 10.3 20H4ZM15.55 17.6L19.9 13.25C20.0833 13.0667 20.3167 12.975 20.6 12.975C20.8833 12.975 21.1167 13.0667 21.3 13.25C21.4833 13.4333 21.575 13.6667 21.575 13.95C21.575 14.2333 21.4833 14.4667 21.3 14.65L16.25 19.7C16.05 19.9 15.8167 20 15.55 20C15.2833 20 15.05 19.9 14.85 19.7L12.8 17.65C12.6167 17.4667 12.525 17.2333 12.525 16.95C12.525 16.6667 12.6167 16.4333 12.8 16.25C12.9833 16.0667 13.2167 15.975 13.5 15.975C13.7833 15.975 14.0167 16.0667 14.2 16.25L15.55 17.6Z',
  edit: 'M4 19V17.2C4 16.6333 4.146 16.1127 4.438 15.638C4.73 15.1633 5.11733 14.8007 5.6 14.55C6.63333 14.0333 7.68333 13.646 8.75 13.388C9.81667 13.13 10.9 13.0007 12 13C12.6167 13 13.225 13.0377 13.825 13.113C14.425 13.1883 15.025 13.309 15.625 13.475L13.95 15.175C13.6167 15.125 13.2917 15.0833 12.975 15.05C12.6583 15.0167 12.3333 15 12 15C11.0667 15 10.1417 15.1127 9.225 15.338C8.30833 15.5633 7.4 15.9007 6.5 16.35C6.35 16.4333 6.229 16.55 6.137 16.7C6.045 16.85 5.99933 17.0167 6 17.2V18H12V20H5C4.71667 20 4.47933 19.904 4.288 19.712C4.09667 19.52 4.00067 19.2827 4 19ZM14 20V18.75C14 18.4833 14.0543 18.229 14.163 17.987C14.2717 17.745 14.4173 17.5327 14.6 17.35L19.525 12.425C19.675 12.275 19.8417 12.1667 20.025 12.1C20.2083 12.0333 20.3917 12 20.575 12C20.775 12 20.9667 12.0377 21.15 12.113C21.3333 12.1883 21.5 12.3007 21.65 12.45L22.575 13.375C22.7083 13.525 22.8127 13.6917 22.888 13.875C22.9633 14.0583 23.0007 14.2417 23 14.425C22.9993 14.6083 22.966 14.796 22.9 14.988C22.834 15.18 22.7257 15.3507 22.575 15.5L17.65 20.425C17.4667 20.6083 17.2543 20.75 17.013 20.85C16.7717 20.95 16.5173 21 16.25 21H15C14.7167 21 14.4793 20.904 14.288 20.712C14.0967 20.52 14.0007 20.2827 14 20ZM15.5 19.5H16.45L19.475 16.45L19.025 15.975L18.55 15.525L15.5 18.55V19.5ZM19.025 15.975L18.55 15.525L19.475 16.45L19.025 15.975ZM12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM12 10C12.55 10 13.021 9.80433 13.413 9.413C13.805 9.02167 14.0007 8.55067 14 8C13.9993 7.44933 13.8037 6.97867 13.413 6.588C13.0223 6.19733 12.5513 6.00133 12 6C11.4487 5.99867 10.978 6.19467 10.588 6.588C10.198 6.98133 10.002 7.452 10 8C9.998 8.548 10.194 9.019 10.588 9.413C10.982 9.807 11.4527 10.0027 12 10Z',
  editFilled:
    'M14 20V18.75C14 18.4833 14.0543 18.229 14.163 17.987C14.2717 17.745 14.4173 17.5327 14.6 17.35L19.525 12.425C19.675 12.275 19.8417 12.1667 20.025 12.1C20.2083 12.0333 20.3917 12 20.575 12C20.775 12 20.9667 12.0377 21.15 12.113C21.3333 12.1883 21.5 12.3007 21.65 12.45L22.575 13.375C22.7083 13.525 22.8127 13.6917 22.888 13.875C22.9633 14.0583 23.0007 14.2417 23 14.425C22.9993 14.6083 22.966 14.796 22.9 14.988C22.834 15.18 22.7257 15.3507 22.575 15.5L17.65 20.425C17.4667 20.6083 17.2543 20.75 17.013 20.85C16.7717 20.95 16.5173 21 16.25 21H15C14.7167 21 14.4793 20.904 14.288 20.712C14.0967 20.52 14.0007 20.2827 14 20ZM4 19V17.2C4 16.6333 4.146 16.1127 4.438 15.638C4.73 15.1633 5.11733 14.8007 5.6 14.55C6.63333 14.0333 7.68333 13.646 8.75 13.388C9.81667 13.13 10.9 13.0007 12 13C12.6167 13 13.225 13.0377 13.825 13.113C14.425 13.1883 15.025 13.309 15.625 13.475L12.875 16.225C12.5917 16.5083 12.375 16.8333 12.225 17.2C12.075 17.5667 12 17.95 12 18.35V20H5C4.71667 20 4.47933 19.904 4.288 19.712C4.09667 19.52 4.00067 19.2827 4 19ZM20.575 15.4L21.5 14.425L20.575 13.5L19.625 14.45L20.575 15.4ZM12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12Z'
};

function PersonIcon(props: PersonIconProps) {
  const { isDefaultFill, type = 'edit', ...otherProps } = props;

  return (
    <svg
      fill={isDefaultFill ? 'currentColor' : '--neutral-80'}
      viewBox={'0 0 24 24'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...otherProps}
    >
      <path d={PersonTypes[type]} />
    </svg>
  );
}

export { PersonIcon };
