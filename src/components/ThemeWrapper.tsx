import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { initializeTheme } from '@/modules/darkMode';

interface Props {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: Props) {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.ui.darkMode.theme);

  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return children;
}
