import React from 'react';
import HomeHeader from './HomeHeader';

interface Props {
  isHeaderVisible: boolean;
  sideTap: boolean;
  darkModeicons: { checked: any; unChecked: any };
  darkModeState: boolean;
  toggleTheme: () => void;
  toggleSideTap: () => void;
  handleMobileMenu: () => void;
}

export default function FixedHeader({ isHeaderVisible, ...rest }: Props) {
  const animationClass = !isHeaderVisible ? 'slide-in' : 'slide-out';

  return (
    <div
      className={` gray ${animationClass} fixed left-0 top-0 z-50  w-full  border-b-2 border-gray-300 bg-slate-100  shadow-md transition-all duration-300 ease-in-out dark:border-b-2  dark:bg-customGreay-900 dark:shadow-lg`}
    >
      <HomeHeader sideTapSwitchId="fixedSideTapSwitch" darkModeSwitchId="fixedDarkModeSwitch" {...rest} />
    </div>
  );
}
