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
    tags: string[];
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
      console.log('tag:', tag);
      dispatch(setSearchedTags(tag));
    },
    [dispatch],
  );

  // selectedTag이 변경될 때마다 검색된 태그를 변경
  // useEffect(() => {
  //   console.log('selectedTag:', selectedTag);
  //   if (!selectedTag) {
  //     dispatch(setSearchedTags(''));
  //     return;
  //   }
  //   dispatch(setSearchedTags(selectedTag));
  // }, [selectedTag]);

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <HomeSearch allTags={allTags} selectedTag={selectedTag} handleTagClick={handleTagClick} />
      <div className="w-[60%]">
        <Taps />
        <div className="flex min-h-screen flex-wrap space-y-2 rounded-md border border-customGreay-200 p-2 dark:border-customGreay-100">
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} handleTagClick={handleTagClick} />
          ))}
        </div>
      </div>
    </div>
  );
}
