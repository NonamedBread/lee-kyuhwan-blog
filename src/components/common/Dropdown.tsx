import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface DropdownProps {
  visibility: boolean;
  items: {
    seriesName: string;
    posts: { constent: string; date: string; isDraft: boolean; slug: string; tags: string[]; title: string }[];
  };
  onTitleClickEvent: () => void | undefined;
}
export default function Dropdown({ visibility, items, onTitleClickEvent }: DropdownProps) {
  return (
    <div className="flex w-full flex-col" key={items.seriesName}>
      <div className="flex cursor-pointer items-center  p-1" onClick={onTitleClickEvent}>
        <ExpandMoreIcon className={`text-2xl ${visibility ? '' : '-rotate-90'}`} />
        <h2 className="text-xl font-bold">{items.seriesName}</h2>
      </div>
      <article className={'transform overflow-hidden p-1'}>
        <ul className={` ${visibility ? 'slide-in-sideTap' : 'slide-out-sideTap'} `}>
          {items.posts.map((item: DropdownProps['items']['posts'][0]) => (
            <li key={item.title} className="flex cursor-pointer items-center justify-between p-2 hover:bg-gray-200 dark:hover:bg-customGreay-600">
              <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">{item.title}</span>
            </li>
          ))}
        </ul>
      </article>
      <div className="w-full border-b-2  border-gray-300"></div>
    </div>
  );
}
