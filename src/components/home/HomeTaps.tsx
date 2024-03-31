import { useState } from 'react';

interface Item {
  key: string;
  name: string;
}

interface TapProps {
  item: Item;
  index: number;
  selected: Item;
  handleSelectTap: (key: string) => void;
}

interface TapsProps {
  postTapsNames: Item[];
  selectedTap: Item;
  handleSelectTap: (key: string) => void;
}

export default function HomeTaps({ postTapsNames, selectedTap, handleSelectTap }: TapsProps) {
  return (
    <div className="flex items-center justify-start  space-x-4 px-5 ">
      {postTapsNames.map((item, index) => (
        <Tap key={item.key} item={item} index={index} selected={selectedTap} handleSelectTap={handleSelectTap} />
      ))}
    </div>
  );
}

const Tap = ({ item: { key, name }, index, selected, handleSelectTap }: TapProps) => {
  return (
    <div
      className={`
       group relative h-9 w-24 bg-slate-100 p-0.5 text-gray-700 [clip-path:polygon(17%_5%,_83%_5%,_97%_100%,_3%_100%)] ${index > 1 ? 'right-16' : index > 0 ? 'right-8' : ''}
       z-10 bg-slate-300 group-hover:text-gray-800
       `}
      onClick={() => handleSelectTap(key)}
    >
      <div
        className={`
          flex h-full w-full 
          items-center justify-center 
          transition-all duration-300 ease-in-out 
          [clip-path:polygon(17%_5%,_83%_5%,_97%_100%,_3%_100%)] 
          hover:cursor-pointer 
          group-hover:bg-slate-300 
          dark:text-slate-300 
          dark:hover:bg-customGreay-900 
          ${selected.key === key ? 'bg-slate-300 dark:bg-customGreay-800' : 'bg-slate-100 dark:bg-customGreay-600'}
        `}
      >
        {name}
      </div>
    </div>
  );
};
