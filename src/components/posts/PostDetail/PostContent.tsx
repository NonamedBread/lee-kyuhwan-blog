import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import PostHeader from './PostHeader';

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export default function PostContent({ post }: { post: Post }) {
  const { title, date, content } = post;
  const customRenderers = {
    p(paragraph: any) {
      const { node } = paragraph;
      if (node.children[0].type === 'image') {
        const image = node.children[0];
        return (
          <div className="h-96 w-full overflow-hidden rounded">
            <Image src={image.url} alt={image.alt} />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <div className="m-8 mx-auto min-h-screen max-w-2xl">
      <PostHeader title={title} date={date} />

      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </div>
  );
}
