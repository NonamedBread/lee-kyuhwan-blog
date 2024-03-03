import { useState, useEffect } from 'react';

import SearchIcon from '@mui/icons-material/Search';

import HomeTags from './HomeTags';

export default function HomeSearch({ allTags }: { allTags: string[] }) {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="relative w-full max-w-md">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
        <input type="text" placeholder="태그를 검색하세요." className="w-full rounded border px-5 py-2 pl-12 text-left" />
      </div>
      <div className="mt-4">
        <HomeTags allTags={allTags} />
      </div>
    </div>
  );
}
