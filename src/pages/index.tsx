import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const theme = useSelector((state: any) => state.darkMode.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-red-100">
      <h1 className="text-6xl font-bold">Posts</h1>
    </div>
  );
}
