import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import darkMode from "@/modules/darkMode";
import HomeHeader from "@/components/home/HomeHeader";

export default function Home() {
  const theme = useSelector((state: any) => state.darkMode.theme);
  const dispatch = useDispatch();

  const toggleTheme = useCallback(() => {
    if (theme === "dark") {
      dispatch(darkMode.actions.enableLightMode());
    } else {
      dispatch(darkMode.actions.enableDarkMode());
    }
  }, [theme, dispatch]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <HomeHeader toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}
