import PostItem from './PostItem';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <div>
      <div className="flex min-h-screen flex-wrap rounded-md border border-customGreay-200 p-2 dark:border-customGreay-100">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
