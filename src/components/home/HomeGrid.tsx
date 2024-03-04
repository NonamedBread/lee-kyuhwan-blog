import { useCallback, useEffect, useState } from 'react';

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
  allTags: string[];
}

export default function HomeGrid({ posts, allTags }: Props) {
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
    <div className="flex flex-col items-center justify-center space-y-8">
      <HomeSearch allTags={allTags} selectedTag={selectedTag} handleTagClick={handleTagClick} />
      <div className="w-[60%]">
        <Taps />
        <div className="flex min-h-screen flex-wrap space-y-[2dvh] rounded-md border border-customGreay-200 p-2 dark:border-customGreay-100">
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} handleTagClick={handleTagClick} />
          ))}
        </div>
      </div>
    </div>
  );
}
