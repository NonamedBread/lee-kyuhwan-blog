import React from 'react';
import HomeHeader from './HomeHeader';

interface Props {
  toggleTheme: () => void;
  theme: string;
  isHeaderVisible: boolean;
}

export default function FixedHeader({ isHeaderVisible, toggleTheme, theme }: Props) {
  const animationClass = !isHeaderVisible ? 'slide-in' : 'slide-out';

  return (
    <div
      className={`box-shadow: 0 4px 2px -2px gray ${animationClass} fixed left-0 top-0 z-50  w-full  bg-slate-100 shadow-md transition-all duration-300 ease-in-out dark:border-b-2  dark:bg-customGreay-900 dark:shadow-lg`}
    >
      <HomeHeader toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}
