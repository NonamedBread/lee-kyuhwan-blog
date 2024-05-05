import { FC } from 'react';

import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ClearIcon from '@mui/icons-material/Clear';

import ToggleSwitch from './ToggleSwitch';

interface MobileMenuProps {
  darkModeSwitchId: string;
  toggleTheme: () => void;
  darkModeicons: { checked: any; unChecked: any };
  darkModeState: boolean;
  handleMobileMenu: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ darkModeSwitchId, toggleTheme, darkModeicons, darkModeState, handleMobileMenu }) => (
  <div className="flex h-[30dvh] w-[30dvw] flex-col items-center justify-center gap-2 ">
    <div className="flex h-[80%] w-full flex-col items-center justify-center gap-3">
      <ToggleSwitch id={darkModeSwitchId} toggleAction={toggleTheme} icons={darkModeicons} checked={darkModeState} iconTheme="darkMode" />
    </div>
    <div className="w-full border-b-2  border-gray-300"></div>
    <div className="flex w-full justify-between ">
      <PersonIcon className="cursor-pointer text-5xl text-customGreay-400 dark:text-customGreay-200" />
      <IconButton onClick={handleMobileMenu}>
        <ClearIcon className="h-7 w-7 dark:text-customGreay-200" />
      </IconButton>
    </div>
  </div>
);

export default MobileMenu;
