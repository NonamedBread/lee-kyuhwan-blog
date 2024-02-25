interface PostHeaderProps {
  title: string;
  date: string;
}

export default function PostHeader({ title, date }: PostHeaderProps) {
  const formattedDate = new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="mb-4">
      <h1 className="mb-4 text-4xl font-bold">{title ?? 'No title'}</h1>
      <div className="my-4 border-b border-gray-500"></div>
      <div className="mb-4 justify-between text-sm">
        <p className="text-sm text-gray-500">{formattedDate}</p>
      </div>
    </div>
  );
}
