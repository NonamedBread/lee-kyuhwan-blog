import { on } from "events";
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

  console.log("selected", selected);
  console.log("key", key);

  //  TODO : group-hover, selected, dark mode

  return (
    <div
      key={key}
      className={`
       text-gray-700 bg-slate-100 w-20 p-0.5 relative group [clip-path:polygon(17%_5%,_83%_5%,_97%_100%,_3%_100%)] ${index > 0 ? "right-8" : ""}
       group-hover:text-gray-800 bg-slate-300 z-10
        bg-${key === selected ? "slate-00" : "slate-100"}       
       `}
      onClick={() => handleSelected(key)}
    >
      <div
        className="
        w-full h-full bg-slate-50 flex items-center justify-center [clip-path:polygon(17%_5%,_83%_5%,_97%_100%,_3%_100%)]
        group-hover:bg-slate-300 transition-all duration-300 ease-in-out
        dark:text-slate-100 dark:bg-customGreay-800
        dark:hover:bg-customGreay-600
        "
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
    <div className="flex justify-start items-center  space-x-4 px-5 ">
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
