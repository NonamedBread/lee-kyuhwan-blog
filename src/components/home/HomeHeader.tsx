import { useState, useCallback, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { IconButton } from '@mui/material';

import NightsStayIcon from '@mui/icons-material/NightsStay';
import HomeIcon from '@mui/icons-material/Home';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import PersonIcon from '@mui/icons-material/Person';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ClearIcon from '@mui/icons-material/Clear';

import darkMode from '@/modules/darkMode';
import layout from '@/modules/layout';

import ToggleSwitch from '../common/ToggleSwitch';
import Modal from '../common/Modal';
import MobileMenu from '../common/MobileMenu';

interface Props {
  theme: string;
  sideTap: boolean;
  sideTapSwitchId: string;
  darkModeSwitchId: string;
}

const DarkModeicons = {
  checked: NightsStayIcon,
  unChecked: WbSunnyIcon,
};

const SideTapIcons = {
  checked: MenuOpenIcon,
  unChecked: MenuIcon,
};

const HomeHeader = forwardRef<HTMLDivElement, Props>(({ theme, sideTap, sideTapSwitchId, darkModeSwitchId }, ref) => {
  const dispatch = useDispatch();
  const darkModeSate = theme === 'dark';

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const toggleTheme = useCallback(() => {
    if (theme === 'dark') {
      dispatch(darkMode.actions.enableLightMode());
    } else {
      dispatch(darkMode.actions.enableDarkMode());
    }
  }, [theme, dispatch]);

  const toggleSideTap = useCallback(() => {
    dispatch(layout.actions.toggleSideTap());
  }, [dispatch]);

  return (
    <>
      <div ref={ref} className={`flex h-full items-center justify-between p-5`}>
        <Link href={'/'} className="h-full cursor-pointer">
          <h1 className="hidden text-4xl font-bold md:block">{'< Lee`s Devlog >'}</h1>
          <HomeIcon className="cursor-pointer text-5xl md:hidden" />
        </Link>
        <div className="h-full ">
          <div className="hidden items-center gap-9 md:flex">
            <ToggleSwitch id={sideTapSwitchId} toggleAction={toggleSideTap} icons={SideTapIcons} checked={sideTap} iconTheme="sideTap" />
            <ToggleSwitch id={darkModeSwitchId} toggleAction={toggleTheme} icons={DarkModeicons} checked={darkModeSate} iconTheme="darkMode" />
            <PersonIcon className="cursor-pointer text-5xl text-customGreay-400 dark:text-customGreay-200" />
          </div>
          <div className="flex items-center md:hidden">
            {/* TODO mobile 메뉴바 */}
            <MenuIcon className="cursor-pointer text-5xl" onClick={handleMobileMenu} />
          </div>
        </div>
      </div>
      <Modal open={isMobileMenuOpen} onClose={handleMobileMenu}>
        <MobileMenu
          darkModeSwitchId={darkModeSwitchId}
          toggleTheme={toggleTheme}
          DarkModeicons={DarkModeicons}
          darkModeSate={darkModeSate}
          handleMobileMenu={handleMobileMenu}
        />
      </Modal>
    </>
  );
});

HomeHeader.displayName = 'HomeHeader';

export default HomeHeader;
