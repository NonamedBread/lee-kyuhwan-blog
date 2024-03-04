import PostItem from '../posts/PostItem';
import HomeSearch from './HomeSearch';
import Taps from '@/components/home/Taps';

interface Props {
  posts: {
    slug: string;
    title: string;
    date: string;
    content: string;
    tags: string[];
  }[];
  allTags: string[];
}

export default function HomeGrid({ posts, allTags }: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <HomeSearch allTags={allTags} />
      <div className="w-[60%]">
        <Taps />
        <div className="flex min-h-screen flex-wrap space-y-[2dvh] rounded-md border border-customGreay-200 p-2 dark:border-customGreay-100">
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
