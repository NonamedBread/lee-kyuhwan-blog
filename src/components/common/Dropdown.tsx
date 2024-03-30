import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface DropdownProps {
  visibility: boolean;
  items: {
    seriesName: string;
    posts: { constent: string; date: string; isDraft: boolean; slug: string; tags: string[]; title: string }[];
  };
  onClickEvent: () => void;
}
export default function Dropdown({ visibility, items, onClickEvent }: DropdownProps) {
  return (
    <div className="flex w-full flex-col gap-2 " key={items.seriesName}>
      <div className="flex cursor-pointer items-center gap-1" onClick={onClickEvent}>
        <ExpandMoreIcon className={`text-2xl ${visibility ? '' : '-rotate-90'}`} />
        <h2 className="text-xl font-bold">{items.seriesName}</h2>
      </div>
      <article className={'transform overflow-hidden'}>
        <ul className={` ${visibility ? 'slide-in-sideTap' : 'slide-out-sideTap'} `}>
          {items.posts.map((item: DropdownProps['items']['posts'][0]) => (
            <li key={item.title} className="flex cursor-pointer items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-customGreay-800">
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
