import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import HomeTags from '../home/HomeTag';

interface PostProps {
  post: {
    series?: string;
    slug: string;
    title: string;
    date: string;
    content: string;
    tags: {
      name: string;
      count: number;
    }[];
  };
  handleTagClick: (tag: string) => void;
}

export default function PostItem({ post, handleTagClick }: PostProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const href = `/posts/${post.series ? `${post.series}/${post.slug}` : post.slug}`;

  return (
    <div className="w-full p-2 ">
      {/* desktop */}
      <div
        className="hidden w-full overflow-auto rounded bg-white shadow transition-all duration-300 ease-in-out
                    hover:-translate-y-2.5 hover:transform dark:bg-customGreay-700 md:block"
      >
        <div className="flex w-full flex-row">
          <div className="relative w-3/5 flex-col items-start justify-center p-4">
            <Link href={{ pathname: `${href}` }}>
              <h2 className="mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">{post.title}</h2>
            </Link>
            <div className="overflow-hidden md:line-clamp-2 lg:line-clamp-2 xl:line-clamp-4">
              <Link href={{ pathname: `${href}` }}>
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
          </div>
          <div className="relative h-full w-2/5">
            <Link href={{ pathname: `${href}` }} className="cursor-pointer">
              <Image src="/images/dummy_image.png" alt={post.title} width={500} height={300} />
            </Link>
          </div>
        </div>
        <div className="w-full border-t border-gray-200"></div>
        <div className="flex flex-row items-center justify-between gap-2 p-5">
          <p className="text-large w-full text-gray-500">{formattedDate}</p>
          <div className=" flex gap-2 ">
            {post.tags.map((tag) => (
              <HomeTags key={tag.name} tags={[tag]} handleTagClick={handleTagClick} size="sm" bgColor="slate" textColor="black" />
            ))}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div
        className="w-full overflow-auto rounded bg-white shadow transition-all duration-300 ease-in-out hover:-translate-y-2.5
                    hover:transform dark:bg-customGreay-700 md:hidden"
      >
        <div className="relative h-full w-full ">
          <Link href={{ pathname: `${href}` }} className="cursor-pointer">
            <Image src="/images/dummy_image.png" alt={post.title} width={500} height={300} />
          </Link>
        </div>
        <div className="w-full border-t border-gray-200"></div>
        <div className="flex flex-col items-center justify-between gap-2 p-5 ">
          <Link href={{ pathname: `${href}` }} className="flex w-full cursor-pointer">
            <h2 className="mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">{post.title}</h2>
          </Link>
          <div className="line-clamp-2 overflow-hidden">
            <Link href={{ pathname: `${href}` }}>
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
          <p className="text-large w-full text-right text-gray-500">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}
