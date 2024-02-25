import PostItem from './PostItem';
import Taps from '@/components/home/Taps';
interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export default function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <div>
      <Taps />
      <div className="flex min-h-screen flex-wrap rounded-md border border-customGreay-200 p-2 dark:border-customGreay-100">
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
