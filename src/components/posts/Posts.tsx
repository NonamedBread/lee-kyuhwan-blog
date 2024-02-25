import PostsGrid from './PostGrid';

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <>
      <PostsGrid posts={posts} />
    </>
  );
}
