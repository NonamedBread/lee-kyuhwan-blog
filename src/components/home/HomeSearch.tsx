import { useState, useEffect } from 'react';

import SearchIcon from '@mui/icons-material/Search';

export default function HomeSearch() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
        <input
          type="text"
          placeholder="태그를 검색하세요.
        "
          className="rounded border px-4 py-2 pl-10 "
        />
      </div>
      {/* TODO 태그 컴포넌트 분리 */}
      {/* <select name="tags" id="tags" className="ml-4 rounded border px-4 py-2">
        <option value="">태그</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select> */}
    </div>
  );
}
