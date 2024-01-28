import ToggleSwitch from "../ToggleSwitch";

interface Props {
  theme: string;
  toggleTheme: () => void;
}

export default function HomeHeader({ theme, toggleTheme }: Props) {
  return (
    <div
      className={`flex justify-between items-center py-4 px-8 ${
        theme === "dark"
          ? "text-slate-100 bg-gray-700"
          : "text-gray-700 bg-slate-100"
      }`}
    >
      <h1 className="text-4xl font-bold">Next.js Typescript Tailwind</h1>
      <div className="flex gap-4">
        <ToggleSwitch theme= {theme} toggleTheme={toggleTheme} />
        <input
          type="text"
          placeholder="검색"
          className="border py-2 px-4 rounded mr-2"
        />
        <button
          className={`border py-2 px-4 rounded mr-2 ${
            theme === "dark"
              ? "text-slate-100 bg-gray-700 border-gray-200 "
              : "text-gray-700 bg-slate-100 border-gray-600 "
          }`}
        >
          Login
        </button>
      </div>
    </div>
  );
}
