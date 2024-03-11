import { useSelector } from 'react-redux';

import HomeGrid from '../home/HomeGrid';

export default function Posts() {
  const posts = useSelector((state: any) => state.data.posts.filteredPosts);
  const topTags = useSelector((state: any) => state.data.tags.topTags);

  return (
    <>
      <HomeGrid posts={posts} topTags={topTags} />
    </>
  );
}
