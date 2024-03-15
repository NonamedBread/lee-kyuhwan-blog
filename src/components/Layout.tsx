import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import darkMode from '@/modules/darkMode';
import HomeHeader from '@/components/home/HomeHeader';
import HomeFooter from './home/HomeFooter';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.darkMode.theme);
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const toggleTheme = useCallback(() => {
    if (theme === 'dark') {
      dispatch(darkMode.actions.enableLightMode());
    } else {
      dispatch(darkMode.actions.enableDarkMode());
    }
  }, [theme, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowHeader(currentScrollPos < scrollPos || currentScrollPos < 100);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  //TODO : 첫 스크롤시 스크롤 위로 올라가는 문제 showHeader 조건문 수정 필요, slide up 효과 추가

  return (
    <>
      <main className="bg-slate-100 pt-[headerHeight] text-gray-700 dark:bg-customGreay-900 dark:text-slate-100">
        {showHeader && <HomeHeader toggleTheme={toggleTheme} theme={theme} scrollPos={scrollPos} />}
        <div className="mx-8 border-l-8">
          <div className=" container mx-auto space-y-8">{children}</div>
        </div>
        <HomeFooter />
      </main>
    </>
  );
}
