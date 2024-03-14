import { useMemo } from 'react';
import Link from 'next/link';

import ToggleSwitch from '../ToggleSwitch';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

interface Props {
  toggleTheme: () => void;
  theme: string;
  scrollPos: number;
}

const icons = {
  checked: NightsStayIcon,
  unChecked: WbSunnyIcon,
};

export default function HomeHeader({ toggleTheme, theme, scrollPos }: Props) {
  const checked = useMemo(() => (theme === 'dark' ? true : false), [theme]);

  const parentClass = 'left-0 right-0 flex items-center justify-between p-5 w-full';
  const fixedClass =
    'fixed top-0 mx-auto z-1 shadow-md transition-all duration-300 ease-in-out dark:shadow-lg dark:border-b-2 box-shadow: 0 4px 2px -2px gray';

  const headerClass = scrollPos > 50 ? `${parentClass} ${fixedClass}` : parentClass;

  return (
    <div className={`flex items-center justify-between pt-5 ${headerClass} bg-slate-100 text-gray-700 dark:bg-customGreay-900 dark:text-slate-100`}>
      <Link href={'/'}>
        <h1 className="text-4xl font-bold">{'< Lee`s Devlog >'}</h1>
      </Link>
      <div className="flex gap-4">
        <ToggleSwitch toggleAction={toggleTheme} icons={icons} checked={checked} />
        <button className={'rounded border border-customGreay-200 px-4 py-2 dark:border-customGreay-100'}>Login</button>
      </div>
    </div>
  );
}
