import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import PostItem from '../posts/PostItem';
import HomeSearch from './HomeSearch';
import Taps from '@/components/home/Taps';

import { setSearchedTags } from '@/modules/posts';

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
  allTags: {
    name: string;
    count: number;
  }[];
}

export default function HomeGrid({ posts, allTags }: Props) {
  const dispatch = useDispatch();
  const [selectedTag, setSelectedTag] = useState<string>('');

  const handleTagClick = useCallback(
    (tag: string) => {
      setSelectedTag(tag);
      dispatch(setSearchedTags(tag));
    },
    [dispatch],
  );

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8">
      <HomeSearch allTags={allTags} selectedTag={selectedTag} handleTagClick={handleTagClick} />
      <div className="w-[60%]">
        <Taps />
        <div className="flex min-h-screen flex-wrap space-y-2 rounded-md border border-customGreay-200 p-2 dark:border-customGreay-100">
          {posts && posts.length > 0 ? (
            posts.map((post) => <PostItem key={post.slug} post={post} handleTagClick={handleTagClick} />)
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-100 text-2xl font-bold text-gray-500">
              <div className="m-20 flex flex-col items-center">
                <span className="text-2xl font-bold">
                  아쉽게도 검색 결과가 없네요.
                  <span role="img" aria-label="Sad face" className="text-4xl">
                    🫨
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
