import Image from 'next/image';
import Link from 'next/link';

import ReactMarkdown from 'react-markdown';

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
      <div className="h-full overflow-auto rounded bg-white shadow dark:bg-customGreay-800">
        <Link href={{ pathname: '/posts/[slug]', query: { slug: post.slug } }}>
          <div className="relative h-2/5 rounded">
            <Image className="object-cover" src="/images/dummy_image.png" fill priority alt={post.title} sizes="100%" />
          </div>
        </Link>
        <div className="h-3/5 w-full p-4">
          <Link href={{ pathname: '/posts/[slug]', query: { slug: post.slug } }}>
            <h2 className="mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">{post.title}</h2>
          </Link>
          <div
            className="h-28 overflow-hidden"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 5,
              WebkitBoxOrient: 'vertical',
            }}
          >
            <Link href={{ pathname: '/posts/[slug]', query: { slug: post.slug } }}>
              <ReactMarkdown
                components={{
                  p(paragraph: any) {
                    return <p>{paragraph.children}</p>;
                  },
                  //Link 태그를 사용하기 위해서 a 태그를 다음과 같이 커스텀
                  a(link: any) {
                    return <u>{link.children}</u>;
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </Link>
          </div>
          <div className="my-4 w-full border-t border-gray-200"></div>
          <div className="mt-4 flex justify-between">
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
