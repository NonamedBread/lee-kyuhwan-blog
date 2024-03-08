import { useSelector } from 'react-redux';

import HomeGrid from '../home/HomeGrid';

export default function Posts() {
  const posts = useSelector((state: any) => state.posts.filteredPosts);
  const allTags = useSelector((state: any) => state.posts.tags);

  return (
    <>
      <HomeGrid posts={posts} allTags={allTags} />
    </>
  );
}
