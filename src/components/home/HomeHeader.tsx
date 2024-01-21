import useDarkMode from "@/hooks/useDarkMode";

export default function HomeHeader() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div
      className={`bg-white ${
        darkMode ? "dark:bg-black text-black dark:text-white" : ""
      } flex justify-between items-center p-4`}
    >
      <h1 className="text-4xl font-bold">Next.js 블로그</h1>
      <div>
        <button
          onClick={toggleDarkMode}
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
        >
          {darkMode ? "라이트 모드" : "다크 모드"}
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
