import { useState } from "react";

const POST_TAPS = [
  { key: "A", name: "All", path: "/posts" },
  { key: "T", name: "Tags", path: "/tags" },
];

const Tap = ({
  item,
  index,
  selected,
  handleSelected,
}: {
  item: {
    key: string;
    name: string;
    path: string;
  };
  index: number;
  selected: string;
  handleSelected: (key: string) => void;
}) => {
  const { key, name, path } = item;

  return (
    <div
      key={key}
      className={`
       group relative w-20 bg-slate-100 p-0.5 text-gray-700 [clip-path:polygon(17%_5%,_83%_5%,_97%_100%,_3%_100%)] ${index > 0 ? "right-8" : ""}
       z-10 bg-slate-300 group-hover:text-gray-800
       `}
      onClick={() => handleSelected(key)}
    >
      <div
        className={`flex h-full w-full items-center justify-center ${selected === key ? "bg-slate-300" : "bg-slate-100"}
        transition-all
        duration-300 ease-in-out [clip-path:polygon(17%_5%,_83%_5%,_97%_100%,_3%_100%)]
        group-hover:bg-slate-300 dark:${selected === key ? "bg-slate-100" : "bg-customGreay-800"}
        dark:text-slate-100
        dark:hover:bg-customGreay-600`}
      >
        {name}
      </div>
    </div>
  );
};

export default function PostsTaps() {
  const [selected, setSelected] = useState(POST_TAPS[0].key);

  const handleSelected = (key: string) => {
    setSelected(key);
  };

  //TODO : clip path tailwindcss로 이동
  return (
    <div className="flex items-center justify-start  space-x-4 px-5 ">
      {POST_TAPS.map((item, index) => (
        <Tap
          item={item}
          index={index}
          selected={selected}
          handleSelected={handleSelected}
        />
      ))}
    </div>
  );
}
