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
    <div className="gap-4">
      <h1 className="text-3xl font-bold md:text-4xl">{title ?? 'No title'}</h1>
      <div className="my-4 border-b border-gray-500"></div>
      <div className="my-4">
        <p className="text-right text-base text-gray-500">{formattedDate}</p>
      </div>
    </div>
  );
}
