import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import PostItem from '../posts/PostItem';
import HomeSearch from './HomeSearch';
import Taps from '@/components/home/Taps';

// import { setSearchResults } from '@/modules/posts';

interface Props {
  posts: {
    slug: string;
    title: string;
    date: string;
    content: string;
    tags: {
      name: string;
      count: number;
    }[];
  }[];
  topTags: {
    name: string;
    count: number;
  }[];
}

export default function HomeGrid({ posts, topTags }: Props) {
  const dispatch = useDispatch();
  const [selectedTag, setSelectedTag] = useState<string>('');

  const handleTagClick = useCallback(
    (tag: string) => {
      setSelectedTag(tag);
      // dispatch(setSearchResults(tag));
    },
    [dispatch],
  );

  // TODO : 게시글 갯수마다 광고 && 0개 이하일 경우 게시글이 없다는 문구와 광고 하나
  return (
    <div className="flex w-full flex-col items-center space-y-8">
      <HomeSearch topTags={topTags} selectedTag={selectedTag} handleTagClick={handleTagClick} />
      <div className="h-full w-[60%]">
        <Taps />
        <div className="flex  flex-wrap space-y-2 rounded-md border border-customGreay-200 p-2 dark:border-customGreay-100">
          {posts && posts.length > 0 ? (
            posts.map((post) => <PostItem key={post.slug} post={post} handleTagClick={handleTagClick} />)
          ) : (
            <div className="flex h-full w-full items-center text-2xl font-bold " data-testid="no-search-result">
              <div className="m-20 flex flex-col items-center">
                <span className="text-2xl font-bold">
                  아쉽게도 검색 결과가 없네요.
                  <span role="img" aria-label="Sad face" className="text-4xl">
                    😅
                  </span>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
