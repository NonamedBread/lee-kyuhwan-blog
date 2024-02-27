import PostItem from '../posts/PostItem';
import HomeSearch from './HomeSearch';
import Taps from '@/components/home/Taps';

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export default function HomeGrid({ posts }: { posts: Post[] }) {
  return (
    <div>
      <HomeSearch />
      <Taps />
      <div className="flex min-h-screen flex-wrap rounded-md border border-customGreay-200 p-2 dark:border-customGreay-100">
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
