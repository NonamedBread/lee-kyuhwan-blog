import { forwardRef, useMemo } from 'react';
import Link from 'next/link';

import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GitHubIcon from '@mui/icons-material/GitHub';

import ToggleSwitch from '../ToggleSwitch';

interface Props {
  toggleTheme: () => void;
  theme: string;
}

const icons = {
  checked: NightsStayIcon,
  unChecked: WbSunnyIcon,
};

//TODO : 사이드탭 추가, 툴팁 추가

const HomeHeader = forwardRef<HTMLDivElement, Props>(({ toggleTheme, theme }, ref) => {
  const checked = useMemo(() => (theme === 'dark' ? true : false), [theme]);

  return (
    <div ref={ref} className={`flex items-center justify-between p-5`}>
      <Link href={'/'}>
        <h1 className="text-4xl font-bold">{'< Lee`s Devlog >'}</h1>
      </Link>
      <div className="flex items-center gap-9 pr-6">
        <ToggleSwitch toggleAction={toggleTheme} icons={icons} checked={checked} />
        <Link href={'https://github.com/NonamedBread'} passHref>
          <GitHubIcon className="cursor-pointer text-5xl" />
        </Link>
      </div>
    </div>
  );
});

HomeHeader.displayName = 'HomeHeader';

export default HomeHeader;
