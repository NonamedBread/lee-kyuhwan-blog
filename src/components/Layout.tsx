import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HomeHeader from '@/components/home/HomeHeader';
import FixedHeader from './home/FixedHeader';
import HomeFooter from './home/HomeFooter';
import HomeSideTap from './home/HomeSideTap';
import FixedButton from './home/FixedButton';

import layout from '@/modules/layout';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const dispatch = useDispatch();
  const headerRef = useRef(null);
  const ui = useSelector((state: any) => state.ui);
  const theme = ui.darkMode.theme;
  const sideTap = ui.layout.sideTap;
  const fixed = ui.layout.fixed;

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
      dispatch(layout.actions.setSideTap(fixed || false)); // 스크롤 이벤트가 발생할 때 sideTap을 false로 설정
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, fixed, scrollPos]);

  return (
    <main className="bg-slate-100 text-gray-700 dark:bg-customGreay-900 dark:text-slate-100">
      <div className={`h-[10dvh]`}>
        <HomeHeader ref={headerRef} sideTapSwitchId="sideTapSwitch" darkModeSwitchId="darkModeSwitch" theme={theme} sideTap={fixed || sideTap} />
        <FixedHeader isHeaderVisible={isHeaderVisible} theme={theme} sideTap={fixed || sideTap} />
      </div>
      <HomeSideTap isHeaderVisible={isHeaderVisible} sideTap={fixed || sideTap} />
      <div className="md:mx-8 md:border-l-8">
        <div className=" mx-auto space-y-8 md:container ">{children}</div>
      </div>
      <FixedButton fixed={fixed} isHeaderVisible={isHeaderVisible} targetRef={headerRef} />
      <HomeFooter />
    </main>
  );
}
