import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import HomeTags from '../home/HomeTags';

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  tags: string[];
}

export default function PostItem({ post }: { post: Post }) {
  const formattedDate = new Date(post.date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="h-[30dvh] w-full p-2 ">
      <div
        className="w-full overflow-auto rounded bg-white shadow transition-all duration-300 ease-in-out hover:-translate-y-2.5
                    hover:transform dark:bg-customGreay-700"
      >
        <div className="flex w-full flex-row">
          <div className="relative flex w-3/5 flex-col items-start justify-center p-4">
            <Link href={{ pathname: '/posts/[slug]', query: { slug: post.slug } }}>
              <h2 className="mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">{post.title}</h2>
            </Link>
            <div className="overflow-hidden sm:line-clamp-1 md:line-clamp-1 lg:line-clamp-2 xl:line-clamp-4">
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
          </div>
          <div className="relative w-2/5">
            <Link href={{ pathname: '/posts/[slug]', query: { slug: post.slug } }}>
              <Image className="object-cover" src="/images/dummy_image.png" alt={post.title} width={500} height={300} />
            </Link>
          </div>
        </div>
        <div className="w-full border-t border-gray-200"></div>
        <div className="flex items-center justify-between gap-2 p-5">
          <p className="text-large   text-gray-500">{formattedDate}</p>
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <HomeTags key={tag} allTags={[tag]} handleTagClick={() => {}} size="sm" bgColor="slate" textColor="black" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
