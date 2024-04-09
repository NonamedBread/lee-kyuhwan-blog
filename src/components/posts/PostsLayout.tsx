import { useRef } from 'react';
import { useSelector } from 'react-redux';

import HomeHeader from '@/components/home/HomeHeader';
import FixedHeader from '../home/FixedHeader';
import HomeFooter from '../home/HomeFooter';
import HomeSideTap from '../home/HomeSideTap';
import FixedButton from '../home/FixedButton';

import { useScrollObserver } from '@/hooks/useScrollObserver';

interface Props {
  children: React.ReactNode;
}

export default function PostsLayout({ children }: Props) {
  const headerRef = useRef(null);
  const ui = useSelector((state: any) => state.ui);
  const theme = ui.darkMode.theme;
  const sideTap = ui.layout.sideTap;
  const fixed = ui.layout.fixed;
  const { isHeaderVisible } = useScrollObserver(fixed, headerRef);

  return (
    <main className="min-h-screen bg-slate-100 text-gray-700 dark:bg-customGreay-900 dark:text-slate-100">
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
