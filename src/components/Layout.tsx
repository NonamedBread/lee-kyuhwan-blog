import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import HomeHeader from "@/components/home/HomeHeader";
import darkMode from "@/modules/darkMode";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const theme = useSelector((state: any) => state.darkMode.theme);
  const dispatch = useDispatch();

  const toggleTheme = useCallback(() => {
    if (theme === "dark") {
      dispatch(darkMode.actions.enableLightMode());
    } else {
      dispatch(darkMode.actions.enableDarkMode());
    }
  }, [theme, dispatch]);
  return (
    <>
      <main className="text-gray-700 bg-slate-100 dark:text-slate-100 dark:bg-customGreay-900">
        <div className="container mx-auto ">
          <HomeHeader toggleTheme={toggleTheme} theme={theme} />
          {children}
        </div>
      </main>
    </>
  );
}
