import { forwardRef, useMemo } from 'react';
import Link from 'next/link';

import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import LabelOffOutlinedIcon from '@mui/icons-material/LabelOffOutlined';
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
  checked: LabelOffOutlinedIcon,
  unChecked: LabelOutlinedIcon,
};

//TODO : 사이드탭 추가, 툴팁 추가 , toggleswitch 컴포넌트 수정

const HomeHeader = forwardRef<HTMLDivElement, Props>(({ toggleTheme, theme }, ref) => {
  const checked = useMemo(() => (theme === 'dark' ? true : false), [theme]);

  return (
    <div ref={ref} className={`flex items-center justify-between p-5`}>
      <Link href={'/'}>
        <h1 className="text-4xl font-bold">{'< Lee`s Devlog >'}</h1>
      </Link>
      <div className="flex items-center gap-9">
        <ToggleSwitch toggleAction={toggleTheme} icons={SideTapIcons} checked={checked} iconTheme="sideTap" />
        <ToggleSwitch toggleAction={toggleTheme} icons={DarkModeicons} checked={checked} iconTheme="darkMode" />
        <PersonIcon className="cursor-pointer text-5xl text-customGreay-400 dark:text-customGreay-200" />
      </div>
    </div>
  );
});

HomeHeader.displayName = 'HomeHeader';

export default HomeHeader;
