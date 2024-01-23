import { useSelector, useDispatch } from "react-redux";
import darkMode from "@/modules/darkMode";

export default function HomeHeader() {
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
    <div
      className={`bg-white ${
        theme === "dark" ? "dark:bg-black text-black dark:text-white" : ""
      } flex justify-between items-center p-4`}
    >
      <h1 className="text-4xl font-bold">Next.js Typescript Tailwind</h1>
      <div>
        <button
          onClick={toggleTheme}
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
        >
          {theme === "dark" ? "라이트 모드" : "다크 모드"}
        </button>
        <input
          type="text"
          placeholder="검색"
          className="border py-2 px-4 rounded mr-2"
        />
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          로그인
        </button>
      </div>
    </div>
  );
}
