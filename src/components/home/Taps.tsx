import { useState } from 'react';

const POST_TAPS = [
  { key: 'A', name: '글', path: '/posts' },
  { key: 'T', name: '시리즈', path: '/tags' },
  { key: 'I', name: '소개', path: '/info' },
];

interface TapProps {
  item: {
    key: string;
    name: string;
    path: string;
  };
  index: number;
  selected: string;
  handleSelected: (key: string) => void;
}

const Tap = ({ item, index, selected, handleSelected }: TapProps) => {
  const { key, name, path } = item;

  return (
    <div
      className={`
       group relative h-9 w-24 bg-slate-100 p-0.5 text-gray-700 [clip-path:polygon(17%_5%,_83%_5%,_97%_100%,_3%_100%)] ${index > 1 ? 'right-16' : index > 0 ? 'right-8' : ''}
       z-10 bg-slate-300 group-hover:text-gray-800
       `}
      onClick={() => handleSelected(key)}
    >
      <div
        className={`flex h-full w-full items-center justify-center ${selected === key ? 'bg-slate-300' : 'bg-slate-100'}
        transition-all
        duration-300 ease-in-out [clip-path:polygon(17%_5%,_83%_5%,_97%_100%,_3%_100%)]
        group-hover:bg-slate-300 dark:${selected === key ? 'bg-customGreay-800' : 'bg-customGreay-600'}
        hover:cursor-pointer
        dark:text-slate-300
        dark:hover:bg-customGreay-900
        `}
      >
        {name}
      </div>
    </div>
  );
};

export default function Taps() {
  const [selected, setSelected] = useState(POST_TAPS[0].key);

  const handleSelected = (key: string) => {
    setSelected(key);
  };

  return (
    <div className="flex items-center justify-start  space-x-4 px-5 ">
      {POST_TAPS.map((item, index) => (
        <Tap key={item.key} item={item} index={index} selected={selected} handleSelected={handleSelected} />
      ))}
    </div>
  );
}
