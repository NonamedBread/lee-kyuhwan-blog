import { useMemo } from 'react';
import Link from 'next/link';

import ToggleSwitch from '../ToggleSwitch';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

interface Props {
  toggleTheme: () => void;
  theme: string;
}

const icons = {
  checked: NightsStayIcon,
  unChecked: WbSunnyIcon,
};

export default function HomeHeader({ toggleTheme, theme }: Props) {
  const checked = useMemo(() => (theme === 'dark' ? true : false), [theme]);

  return (
    <div className={`flex items-center justify-between py-5`}>
      <Link href={'/'}>
        <h1 className="text-4xl font-bold">{'<  / Lee`s Devlog>'}</h1>
      </Link>
      <div className="flex gap-4">
        <ToggleSwitch toggleAction={toggleTheme} icons={icons} checked={checked} />
        <input type="text" placeholder="검색" className="rounded border px-4  py-2 " />
        <button className={'rounded border border-customGreay-200  px-4 py-2 dark:border-customGreay-100'}>Login</button>
      </div>
    </div>
  );
}
