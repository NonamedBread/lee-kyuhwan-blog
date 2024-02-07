import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import darkMode from '@/modules/darkMode';
import HomeHeader from '@/components/home/HomeHeader';
import Taps from '@/components/home/Taps';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const theme = useSelector((state: any) => state.darkMode.theme);
  const dispatch = useDispatch();

  const toggleTheme = useCallback(() => {
    if (theme === 'dark') {
      dispatch(darkMode.actions.enableLightMode());
    } else {
      dispatch(darkMode.actions.enableDarkMode());
    }
  }, [theme, dispatch]);
  return (
    <>
      <main className="bg-slate-100 text-gray-700 dark:bg-customGreay-900 dark:text-slate-100">
        <div className="container mx-auto ">
          <HomeHeader toggleTheme={toggleTheme} theme={theme} />
          <Taps />
          {children}
        </div>
      </main>
    </>
  );
}
