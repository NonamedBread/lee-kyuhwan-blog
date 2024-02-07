import PostsGrid from './PostGrid';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <>
      <PostsGrid posts={posts} />
    </>
  );
}
