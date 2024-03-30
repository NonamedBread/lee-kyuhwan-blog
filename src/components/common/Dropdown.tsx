import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

interface DropdownProps {
  visibility: boolean;
  items: {
    seriesName: string;
    posts: {
      slug: string;
      series: string;
      title: string;
    }[];
  };
  onTitleClickEvent: () => void | undefined;
}

export default function Dropdown({ visibility, items, onTitleClickEvent }: DropdownProps) {
  return (
    <div className="flex w-full flex-col" key={items.seriesName}>
      <div className="flex cursor-pointer items-center  p-1" onClick={onTitleClickEvent}>
        <ExpandMoreIcon className={`text-xl ${visibility ? '' : '-rotate-90'}`} />
        <h2 className="text-lg font-bold">{items.seriesName}</h2>
      </div>
      <article className={'transform overflow-hidden p-1'}>
        <ul className={` ${visibility ? 'slide-in-sideTap' : 'slide-out-sideTap'} `}>
          {items.posts.map((item: DropdownProps['items']['posts'][0]) => (
            <Link href={`/posts/${item.series}/${item.slug}`} key={item.title}>
              <li key={item.title} className="flex cursor-pointer items-center justify-between p-1 hover:bg-gray-200 dark:hover:bg-customGreay-600">
                <span className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm">{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </article>
      <div className="w-full border-b-2  border-gray-300"></div>
    </div>
  );
}
