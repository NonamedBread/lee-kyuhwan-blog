import Image from 'next/image';
import Link from 'next/link';

import ReactMarkdown from 'react-markdown';

import MarkdownRenderer from '@/components/MarkdownRenderer';

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export default function PostItem({ post }: { post: Post }) {
  console.log(post);

  const formattedDate = new Date(post.date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="h-[45dvh] w-full cursor-pointer p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      {/* <Link href={`/posts/${post.id}`}> */}
      <div className="h-full overflow-auto rounded bg-white shadow dark:bg-customGreay-800">
        <div className="relative h-2/5 rounded">
          <Image className=" object-cover" src="/images/dummy_image.png" fill priority alt={post.title} sizes="100%" />
        </div>
        <div className="h-3/5 w-full p-4 ">
          <div>
            <h2 className="mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">{post.title}</h2>
          </div>

          {/* content 길이 조절 */}
          {/* <p
            className="h-28 overflow-hidden"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 5,
              WebkitBoxOrient: 'vertical',
            }}
          > */}
          {/* {post.content} */}
          <MarkdownRenderer>{post.content}</MarkdownRenderer>
          {/* {typeof window !== 'undefined' && <ReactMarkdown>{post.content}</ReactMarkdown>}{' '} */}
          {/* </p> */}
          <div className="my-4 w-full border-t border-gray-200"></div>
          <div className="mt-4 flex  justify-between">
            <p className="text-sm text-gray-500">{formattedDate}</p>
            {/* <p className="ml-4 text-sm text-gray-500">{post.id}개의 댓글</p> */}
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}
