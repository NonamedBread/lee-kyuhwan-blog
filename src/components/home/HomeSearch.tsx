import { useDispatch } from 'react-redux';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import HomeTag from './HomeTag';

import { setSideTap } from '@/modules/layout';

interface SearchProps {
  topTags: {
    name: string;
    count: number;
  }[];

  selectedTag: string;
  handleTagClick: (tag: string) => void;
}

export default function HomeSearch({ topTags, selectedTag, handleTagClick }: SearchProps) {
  const dispatch = useDispatch();

  const handleSideTap = (value: boolean) => {
    dispatch(setSideTap(value));
  };

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8 p-12">
      <div className="relative w-full max-w-md">
        <SearchIcon className="absolute  left-3 top-1/2 -translate-y-1/2 transform text-gray-500 dark:text-slate-100" />
        <input
          type="text"
          value={selectedTag}
          placeholder="태그를 검색하세요."
          className="w-full rounded border px-5 py-2 pl-12 text-left text-gray-500 dark:border-customGreay-100 dark:bg-customGreay-900 dark:text-slate-100
          "
          onChange={(e) => handleTagClick(e.target.value)}
          onFocus={() => handleSideTap(true)}
        />
        {selectedTag && (
          <CloseIcon
            className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500 hover:cursor-pointer dark:text-slate-100"
            onClick={() => {
              handleTagClick('');
              handleSideTap(false);
            }}
          />
        )}
      </div>
      <div className="mt-4 hidden w-full md:block ">
        <HomeTag tags={topTags} handleTagClick={handleTagClick} handleSideTap={handleSideTap} />
      </div>
    </div>
  );
}
