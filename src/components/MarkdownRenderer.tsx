import ReactMarkdown from 'react-markdown';

export default function MarkdownRenderer({ children }: { children: string }) {
  //TODO: 커스텀 수정
  const customRenderers = {
    p(paragraph: any) {
      const { node } = paragraph;
      if (node.children[0].type === 'image') {
        const image = node.children[0];
        return (
          <div className="h-96 w-full overflow-hidden rounded">
            <img src={image.url} alt={image.alt} />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };

  return <ReactMarkdown components={customRenderers}>{children}</ReactMarkdown>;
}
