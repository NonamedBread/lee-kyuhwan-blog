import { useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import darkMode from "@/modules/darkMode";
import HomeHeader from "@/components/home/HomeHeader";
import storage from "@/lib/storage";

export default function Home() {
  let theme = useSelector((state: any) => state.darkMode.theme);
  const dispatch = useDispatch();

  const loadTheme = () => {
    const loadTheme = storage.getItem("theme");
    if (!loadTheme) return;
    if (loadTheme === "dark") {
      dispatch(darkMode.actions.enableDarkMode());
    } else {
      dispatch(darkMode.actions.enableLightMode());
    }
    theme = loadTheme;
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      dispatch(darkMode.actions.enableLightMode());
    } else {
      dispatch(darkMode.actions.enableDarkMode());
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);
  return (
    <div>
      <HomeHeader theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
