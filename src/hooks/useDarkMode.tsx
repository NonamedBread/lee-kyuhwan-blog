import { useEffect, useState } from "react";

const useDarkmode = (): [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Check if user has a preference for dark mode
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);

    // Listen for changes in user's preference for dark mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    // Clean up event listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkmode;
