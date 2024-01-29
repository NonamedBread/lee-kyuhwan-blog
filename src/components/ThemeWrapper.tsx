import React, { useEffect } from "react";
import { useSelector } from "react-redux";

interface Props {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: Props) {
  const theme = useSelector((state: any) => state.darkMode.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return children;
}
