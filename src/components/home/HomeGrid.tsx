import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomeSearch from './HomeSearch';
import HomeTaps from '@/components/home/HomeTaps';

import Posts from '@/components/posts/Posts';
import AboutMe from '../common/AboutMe';

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
  return series.reduce((allPosts: Post[], seriesItem: Series) => [...allPosts, ...seriesItem.posts], [] as Post[]);
}

function getTags(posts: Post[]): Tag[] {
  const tagCount = posts.reduce(
    (acc, post) => {
      post.tags.forEach((tag) => {
        acc[tag.name] = (acc[tag.name] || 0) + 1;
      });
      return acc;
    },
    {} as { [key: string]: number },
  );

  return Object.entries(tagCount).map(([name, count]) => ({ name, count: Number(count) }));
}

const POST_TAPS = [
  { key: 'P', name: '글' },
  { key: 'T', name: '시리즈' },
  { key: 'I', name: '소개' },
];

export default function HomeGrid() {
  const dispatch = useDispatch();
  const series = useSelector((state: { data: { filteredSeries: Series[] } }) => state.data.filteredSeries);
  const [selectedTag, setSelectedTag] = useState<string>('');
  const posts = getAllPosts(series);
  const tags = getTags(posts);
  const topTags = tags.sort((a: { count: number }, b: { count: number }) => b.count - a.count).slice(0, 10);
  const postTapsNames = POST_TAPS.map((item) => ({ key: item.key, name: item.name }));
  const [selectedTap, setSelectedTap] = useState(postTapsNames[0]);

  const handleTagClick = useCallback(
    (tag: string) => {
      setSelectedTag(tag);
      dispatch(filterSeriesByTag(tag));
    },
    [dispatch],
  );

  const handleSelectTap = (key: string) => {
    setSelectedTap(postTapsNames.find((item) => item.key === key) || postTapsNames[0]);
  };

  // TODO : 게시글 갯수마다 광고 && 0개 이하일 경우 게시글이 없다는 문구와 광고 하나
  return (
    <div className="flex w-full flex-col items-center space-y-8">
      <HomeSearch topTags={topTags} selectedTag={selectedTag} handleTagClick={handleTagClick} />
      <div className="h-full w-[95%] md:w-[70%]">
        <HomeTaps postTapsNames={postTapsNames} selectedTap={selectedTap} handleSelectTap={handleSelectTap} />
        <div className="flex flex-wrap space-y-2 rounded-md border border-customGreay-200 p-2 dark:border-customGreay-100">
          {selectedTap.key === 'P' ? <Posts posts={posts} handleTagClick={handleTagClick} /> : selectedTap.key === 'T' ? <>시리즈</> : <AboutMe />}
        </div>
      </div>
    </div>
  );
}
