import { forwardRef, useMemo } from 'react';
import Link from 'next/link';

import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import ToggleSwitch from '../ToggleSwitch';

interface Props {
  toggleTheme: () => void;
  theme: string;
}

const icons = {
  checked: NightsStayIcon,
  unChecked: WbSunnyIcon,
};

const HomeHeader = forwardRef<HTMLDivElement, Props>(({ toggleTheme, theme }, ref) => {
  const checked = useMemo(() => (theme === 'dark' ? true : false), [theme]);

  return (
    <div ref={ref} className={`flex items-center justify-between p-5`}>
      <Link href={'/'}>
        <h1 className="text-4xl font-bold">{'< Lee`s Devlog >'}</h1>
      </Link>
      <div className="flex gap-4">
        <ToggleSwitch toggleAction={toggleTheme} icons={icons} checked={checked} />
        <button className={'rounded border border-customGreay-200 px-4 py-2 dark:border-customGreay-100'}>Login</button>
      </div>
    </div>
  );
});

HomeHeader.displayName = 'HomeHeader';

export default HomeHeader;
