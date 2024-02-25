import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export default function PostContent({ post }: { post: Post }) {
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
    <div className="mx-auto  max-w-2xl">
      <h1 className="mb-4 text-4xl font-bold">{post.title ?? 'No title'}</h1>
      <div className="mb-4 text-sm text-gray-500">{post.date}</div>
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </div>
  );
}
