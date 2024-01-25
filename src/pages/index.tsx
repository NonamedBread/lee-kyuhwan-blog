import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import darkMode from "@/modules/darkMode";
import HomeHeader from "@/components/home/HomeHeader";

const posts = [
  { id: "1", title: "첫 번째 포스트", summary: "이것은 첫 번째 포스트입니다." },
  { id: "2", title: "두 번째 포스트", summary: "이것은 두 번째 포스트입니다." },
  // 실제 애플리케이션에서는 API 호출 등을 통해 데이터를 가져옵니다.
];

export default function Home() {
  const theme = useSelector((state: any) => state.darkMode.theme);
  const dispatch = useDispatch(); // useDispatch 훅을 사용하여 dispatch 함수를 가져옵니다.

  const toggleTheme = () => {
    if (theme === "dark") {
      dispatch(darkMode.actions.enableLightMode()); // 테마가 'dark'이면 'light' 모드로 전환합니다.
    } else {
      dispatch(darkMode.actions.enableDarkMode()); // 그렇지 않으면 'dark' 모드로 전환합니다.
    }
  };
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
