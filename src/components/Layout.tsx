import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';

import HomeHeader from '@/components/home/HomeHeader';
import FixedHeader from './home/FixedHeader';
import HomeFooter from './home/HomeFooter';
import HomeSideTap from './home/HomeSideTap';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const headerRef = useRef(null);
  const ui = useSelector((state: any) => state.ui);
  const theme = ui.darkMode.theme;
  const sideTap = ui.layout.sideTap;
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

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
        <HomeHeader ref={headerRef} theme={theme} sideTap={sideTap} />
        <FixedHeader isHeaderVisible={isHeaderVisible} theme={theme} sideTap={sideTap} />
        <div className="mx-8 border-l-8">
          <div className=" container mx-auto space-y-8">{children}</div>
        </div>
        <HomeFooter />
      </main>
      <HomeSideTap />
    </>
  );
}
