import { useSelector } from 'react-redux';

import HomeGrid from '../home/HomeGrid';

export default function Posts() {
  const series = useSelector((state: any) => state.data.series);
  console.log('series:', series);

  const posts = [
    { slug: 'first-post', title: 'First Post', date: '2021-01-01', content: 'This is the first post.', tags: [{ name: 'React', count: 1 }] },
  ];
  const topTags = [{ name: 'React', count: 1 }];

  return (
    <>
      <HomeGrid posts={posts} topTags={topTags} />
    </>
  );
}
