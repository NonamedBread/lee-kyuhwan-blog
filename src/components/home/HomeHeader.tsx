import { forwardRef, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import darkMode from '@/modules/darkMode';
import layout from '@/modules/layout';

import ToggleSwitch from '../ToggleSwitch';

interface Props {
  theme: string;
  sideTap: boolean;
}

const DarkModeicons = {
  checked: NightsStayIcon,
  unChecked: WbSunnyIcon,
};

const SideTapIcons = {
  checked: MenuOpenIcon,
  unChecked: MenuIcon,
};

const HomeHeader = forwardRef<HTMLDivElement, Props>(({ theme, sideTap }, ref) => {
  const dispatch = useDispatch();
  const darkModeSate = useMemo(() => (theme === 'dark' ? true : false), [theme]);

  const toggleTheme = useCallback(() => {
    if (theme === 'dark') {
      dispatch(darkMode.actions.enableLightMode());
    } else {
      dispatch(darkMode.actions.enableDarkMode());
    }
  }, [theme, dispatch]);

  const toggleSideTap = useCallback(() => {
    dispatch(layout.actions.toggleSideTap());
  }, [sideTap, dispatch]);

  return (
    <div ref={ref} className={`flex items-center justify-between p-5`}>
      <Link href={'/'}>
        <h1 className="text-4xl font-bold">{'< Lee`s Devlog >'}</h1>
      </Link>
      <div className="flex items-center gap-9">
        <ToggleSwitch id="sideTapSwitch" toggleAction={toggleSideTap} icons={SideTapIcons} checked={sideTap} iconTheme="sideTap" />
        <ToggleSwitch id="darkModeSwitch" toggleAction={toggleTheme} icons={DarkModeicons} checked={darkModeSate} iconTheme="darkMode" />
        <PersonIcon className="cursor-pointer text-5xl text-customGreay-400 dark:text-customGreay-200" />
      </div>
    </div>
  );
});

HomeHeader.displayName = 'HomeHeader';

export default HomeHeader;
