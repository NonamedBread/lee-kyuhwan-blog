import { useState, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomeHeader from '@/components/home/HomeHeader';
import FixedHeader from './FixedHeader';
import HomeFooter from './HomeFooter';
import HomeSideTap from './HomeSideTap';
import FixedButton from './FixedButton';
import Modal from '../common/Modal';
import MobileMenu from '../common/MobileMenu';

import { useScrollObserver } from '@/hooks/useScrollObserver';

import darkMode from '@/modules/darkMode';
import layout from '@/modules/layout';

import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

interface Props {
  children: React.ReactNode;
}

const DarkModeicons = {
  checked: NightsStayIcon,
  unChecked: WbSunnyIcon,
};

export default function PostsLayout({ children }: Props) {
  const dispatch = useDispatch();
  const headerRef = useRef(null);
  const theme = useSelector((state: any) => state.ui.darkMode.theme);
  const sideTap = useSelector((state: any) => state.ui.layout.sideTap);
  const fixed = useSelector((state: any) => state.ui.layout.fixed);
  const isHeaderVisible = useScrollObserver(fixed, headerRef);

  const darkModeState = useMemo(() => theme === 'dark', [theme]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    if (theme === 'dark') {
      dispatch(darkMode.actions.enableLightMode());
    } else {
      dispatch(darkMode.actions.enableDarkMode());
    }
  };

  const toggleSideTap = () => {
    dispatch(layout.actions.toggleSideTap());
  };

  return (
    <main className="min-h-screen bg-slate-100 text-gray-700 dark:bg-customGreay-900 dark:text-slate-100">
      <div className={`h-[10dvh]`}>
        <HomeHeader
          ref={headerRef}
          sideTapSwitchId="sideTapSwitch"
          darkModeSwitchId="darkModeSwitch"
          DarkModeicons={DarkModeicons}
          darkModeState={darkModeState}
          sideTap={fixed || sideTap}
          toggleSideTap={toggleSideTap}
          toggleTheme={toggleTheme}
          handleMobileMenu={handleMobileMenu}
        />
        <FixedHeader
          isHeaderVisible={isHeaderVisible}
          DarkModeicons={DarkModeicons}
          darkModeState={darkModeState}
          sideTap={fixed || sideTap}
          toggleSideTap={toggleSideTap}
          toggleTheme={toggleTheme}
          handleMobileMenu={handleMobileMenu}
        />
      </div>
      <HomeSideTap isHeaderVisible={isHeaderVisible} sideTap={fixed || sideTap} />
      <div className="md:mx-8 md:border-l-8">
        <div className=" mx-auto space-y-8 md:container ">{children}</div>
      </div>
      <FixedButton fixed={fixed} isHeaderVisible={isHeaderVisible} targetRef={headerRef} />
      <HomeFooter />
      <Modal open={isMobileMenuOpen} onClose={handleMobileMenu}>
        <MobileMenu
          darkModeSwitchId="mobileDarkModeSwitch"
          toggleTheme={toggleTheme}
          DarkModeicons={DarkModeicons}
          darkModeState={darkModeState}
          handleMobileMenu={handleMobileMenu}
        />
      </Modal>
    </main>
  );
}
