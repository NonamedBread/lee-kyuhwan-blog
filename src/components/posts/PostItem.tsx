import Image from 'next/image';
import Link from 'next/link';

import MarkdownRenderer from '@/components/MarkdownRenderer';

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export default function PostItem({ post }: { post: Post }) {
  const formattedDate = new Date(post.date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="h-[45dvh] w-full p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      {/*TODO : Warning: Expected server HTML to contain a matching <div> in <a>.
       */}
      <div className="h-full overflow-auto rounded bg-white shadow dark:bg-customGreay-800">
        <Link href={`/posts/${post.slug}`}>
          <div className="relative h-2/5 rounded">
            <Image className="object-cover" src="/images/dummy_image.png" fill priority alt={post.title} sizes="100%" />
          </div>
        </Link>
        <div className="h-3/5 w-full p-4">
          <Link href={`/posts/${post.slug}`}>
            <h2 className="mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">{post.title}</h2>
          </Link>
          <Link href={`/posts/${post.slug}`}>
            <div
              className="h-28 overflow-hidden"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 5,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {post.content}
            </div>
          </Link>
          <div className="my-4 w-full border-t border-gray-200"></div>
          <div className="mt-4 flex justify-between">
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
