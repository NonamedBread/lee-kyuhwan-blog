import { useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import darkMode from "@/modules/darkMode";
import HomeHeader from "@/components/home/HomeHeader";
import storage from "@/lib/storage";

const posts = [
  { id: "1", title: "첫 번째 포스트", summary: "이것은 첫 번째 포스트입니다." },
  { id: "2", title: "두 번째 포스트", summary: "이것은 두 번째 포스트입니다." },
  // 실제 애플리케이션에서는 API 호출 등을 통해 데이터를 가져옵니다.
];

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
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <Link href={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
