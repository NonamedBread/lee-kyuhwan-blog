import Image from "next/image";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-wrap min-h-screen py-2 ">
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-[40vh] p-4 "
        >
          <div className="h-full rounded shadow overflow-auto bg-white dark:bg-gray-900">
            <div className="relative h-1/2 rounded overflow-hidden">
              <Image
                src="/images/dummy_image.png"
                layout="fill"
                objectFit="cover"
                alt={post.title}
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap">
                {post.title}
              </h2>
              {/* TODO : 포스트 내용이 길어지면 ... 처리 */}
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
