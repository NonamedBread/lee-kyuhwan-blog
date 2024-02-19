import PostItem from './PostItem';

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export default function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <div>
      <div className="flex min-h-screen flex-wrap rounded-md border border-customGreay-200 p-2 dark:border-customGreay-100">
        {posts.map((post) => (
          <PostItem post={post} />
        ))}
      </div>
    </div>
  );
}
