import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import PostItem from '../posts/PostItem';
import HomeSearch from './HomeSearch';
import Taps from '@/components/home/HomeTaps';

import { filterSeriesByTag } from '@/modules/posts';
interface Tag {
  name: string;
  count: number;
}

interface Post {
  slug: string;
  series: string;
  title: string;
  date: string;
  content: string;
  isFeatured: boolean;
  isDraft: boolean;
  tags: Tag[];
}

interface Series {
  seriesName: string;
  posts: Post[];
}

function getAllPosts(series: Series[]) {
  let allPosts: Post[] = [];
  for (let seriesName in series) {
    allPosts = [...allPosts, ...series[seriesName].posts];
  }
  return allPosts;
}

function getTags(posts: Post[]): Tag[] {
  const tagCount: { [key: string]: number } = {};

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (tagCount[tag.name]) {
        tagCount[tag.name]++;
      } else {
        tagCount[tag.name] = 1;
      }
    });
  });

  return Object.entries(tagCount).map(([name, count]) => ({ name, count: Number(count) }));
}

export default function HomeGrid({ series }: { series: Series[] }) {
  const dispatch = useDispatch();
  const [selectedTag, setSelectedTag] = useState<string>('');
  const posts = getAllPosts(series);
  const tags = getTags(posts);

  const topTags = tags.sort((a: { count: number }, b: { count: number }) => b.count - a.count).slice(0, 10);

  const handleTagClick = useCallback(
    (tag: string) => {
      setSelectedTag(tag);
      dispatch(filterSeriesByTag(tag));
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
            // TODO : 컴포넌트로 분리
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
