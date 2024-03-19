import React, { useState, useEffect, useCallback, useRef, use } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import darkMode from '@/modules/darkMode';

import HomeHeader from '@/components/home/HomeHeader';
import FixedHeader from './home/FixedHeader';
import HomeFooter from './home/HomeFooter';
import HomeSideTap from './home/HomeSideTap';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const dispatch = useDispatch();
  const headerRef = useRef(null);
  const theme = useSelector((state: any) => state.darkMode.theme);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const toggleTheme = useCallback(() => {
    if (theme === 'dark') {
      dispatch(darkMode.actions.enableLightMode());
    } else {
      dispatch(darkMode.actions.enableDarkMode());
    }
  }, [theme, dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsHeaderVisible(entry.isIntersecting), { threshold: 0.1 });

    const currentRef = headerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHeaderVisible(currentScrollPos < scrollPos);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHeaderVisible, scrollPos]);

  return (
    <>
      <main className="bg-slate-100 pt-[headerHeight] text-gray-700 dark:bg-customGreay-900 dark:text-slate-100">
        <HomeHeader ref={headerRef} toggleTheme={toggleTheme} theme={theme} />
        <FixedHeader isHeaderVisible={isHeaderVisible} toggleTheme={toggleTheme} theme={theme} />
        <div className="mx-8 border-l-8">
          <div className=" container mx-auto space-y-8">{children}</div>
        </div>
        <HomeFooter />
      </main>
      <HomeSideTap />
    </>
  );
}
