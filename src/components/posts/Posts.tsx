import HomeGrid from '../home/HomeGrid';

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <>
      <HomeGrid posts={posts} />
    </>
  );
}
