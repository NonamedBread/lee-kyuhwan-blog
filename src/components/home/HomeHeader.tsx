import { forwardRef, useMemo } from 'react';
import Link from 'next/link';

import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LabelIcon from '@mui/icons-material/Label';
import LabelOffIcon from '@mui/icons-material/LabelOff';
import PersonIcon from '@mui/icons-material/Person';

import ToggleSwitch from '../ToggleSwitch';

interface Props {
  toggleTheme: () => void;
  theme: string;
}

const DarkModeicons = {
  checked: NightsStayIcon,
  unChecked: WbSunnyIcon,
};

const SideTapIcons = {
  checked: LabelIcon,
  unChecked: LabelOffIcon,
};

//TODO : 사이드탭 추가, 툴팁 추가

const HomeHeader = forwardRef<HTMLDivElement, Props>(({ toggleTheme, theme }, ref) => {
  const checked = useMemo(() => (theme === 'dark' ? true : false), [theme]);

  return (
    <div ref={ref} className={`flex items-center justify-between p-5`}>
      <Link href={'/'}>
        <h1 className="text-4xl font-bold">{'< Lee`s Devlog >'}</h1>
      </Link>
      <div className="flex items-center gap-9">
        <ToggleSwitch toggleAction={toggleTheme} icons={SideTapIcons} checked={checked} />
        <ToggleSwitch toggleAction={toggleTheme} icons={DarkModeicons} checked={checked} />
        <PersonIcon className="text-customBlue-500 dark:text-customBlue-100 cursor-pointer text-5xl" />
      </div>
    </div>
  );
});

HomeHeader.displayName = 'HomeHeader';

export default HomeHeader;
