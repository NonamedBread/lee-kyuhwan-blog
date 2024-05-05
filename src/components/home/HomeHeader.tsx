import { forwardRef } from 'react';
import Link from 'next/link';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import ToggleSwitch from '../common/ToggleSwitch';

interface Props {
  sideTap: boolean;
  sideTapSwitchId: string;
  darkModeSwitchId: string;
  darkModeicons: { checked: any; unChecked: any };
  darkModeState: boolean;
  toggleSideTap: () => void;
  toggleTheme: () => void;
  handleMobileMenu: () => void;
}

const SideTapIcons = {
  checked: MenuOpenIcon,
  unChecked: MenuIcon,
};

const HomeHeader = forwardRef<HTMLDivElement, Props>(
  ({ sideTap, sideTapSwitchId, darkModeSwitchId, darkModeicons, darkModeState, toggleSideTap, toggleTheme, handleMobileMenu }, ref) => {
    const renderToggleSwitch = (
      id: string,
      toggleAction: () => void,
      icons: { checked: any; unChecked: any },
      checked: boolean,
      iconTheme: string,
    ) => <ToggleSwitch id={id} toggleAction={toggleAction} icons={icons} checked={checked} iconTheme={iconTheme} />;

    return (
      <>
        <div ref={ref} className={`flex h-full items-center justify-between p-5`}>
          <Link href={'/'} className="h-full cursor-pointer">
            <h1 className="hidden text-4xl font-bold md:block">{'< Lee`s Devlog >'}</h1>
            <HomeIcon className="cursor-pointer text-5xl md:hidden" />
          </Link>
          <div className="h-full ">
            <div className="hidden items-center gap-9 md:flex">
              {renderToggleSwitch(sideTapSwitchId, toggleSideTap, SideTapIcons, sideTap, 'sideTap')}
              {renderToggleSwitch(darkModeSwitchId, toggleTheme, darkModeicons, darkModeState, 'darkMode')}
              <PersonIcon className="cursor-pointer text-5xl text-customGreay-400 dark:text-customGreay-200" />
            </div>
            <div className="flex items-center md:hidden">
              <MenuIcon className="cursor-pointer text-5xl" onClick={handleMobileMenu} />
            </div>
          </div>
        </div>
      </>
    );
  },
);

HomeHeader.displayName = 'HomeHeader';

export default HomeHeader;
