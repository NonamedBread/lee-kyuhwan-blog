import { useState, useCallback, useEffect } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import HomeTags from './HomeTags';

import { setSearchedTags } from '@/modules/posts';

export default function HomeSearch({ allTags }: { allTags: string[] }) {
  const [selectedTag, setSelectedTag] = useState<string>('');

  const handleTagClick = useCallback((tag: string) => {
    setSelectedTag(tag);
    setSearchedTags(tag);
  }, []);

  // selectedTag이 변경될 때마다 검색된 태그를 변경
  useEffect(() => {
    console.log('selectedTag:', selectedTag);
    if (!selectedTag) {
      setSearchedTags('');
      return;
    }
    setSearchedTags(selectedTag);
  }, [selectedTag]);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-12">
      <div className="relative w-full max-w-md">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500 dark:text-slate-100" />
        <input
          type="text"
          value={selectedTag}
          placeholder="태그를 검색하세요."
          className="w-full rounded border px-5 py-2 pl-12 text-left text-gray-500 dark:border-customGreay-100 dark:bg-customGreay-900 dark:text-slate-100
          "
          onChange={(e) => setSelectedTag(e.target.value)}
        />
        {selectedTag && (
          <CloseIcon
            className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500 hover:cursor-pointer dark:text-slate-100"
            onClick={() => setSelectedTag('')}
          />
        )}
      </div>
      <div className="mt-4">
        <HomeTags allTags={allTags} handleTagClick={handleTagClick} />
      </div>
    </div>
  );
}
