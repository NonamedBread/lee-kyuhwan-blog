interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export default function PostHeader({ post }: { post: Post }) {
  const formattedDate = new Date(post.date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="mb-4">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <div className="mt-4 flex justify-between">
        <p className="text-sm text-gray-500">{formattedDate}</p>
      </div>
    </div>
  );
}
