import Image from "next/image";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Posts({ posts }: { posts: Post[] }) {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();

  let formattedDate = yyyy + "년 " + mm + "월 " + dd + "일";
  return (
    <div className="flex min-h-screen flex-wrap rounded-md border border-customGreay-200 p-2 dark:border-customGreay-100">
      {posts.map((post) => (
        <div
          key={post.id}
          className="h-[45dvh] w-full p-4 md:w-1/2 lg:w-1/3 xl:w-1/4 "
        >
          <div className="h-full overflow-auto rounded bg-white shadow dark:bg-customGreay-800">
            <div className="relative h-2/5 rounded">
              <Image
                className=" object-cover"
                src="/images/dummy_image.png"
                fill
                priority
                alt={post.title}
                sizes="100%"
              />
            </div>
            <div className="h-3/5 w-full p-4 ">
              <div>
                <h2 className="mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">
                  {post.title}
                </h2>
              </div>
              <p
                className="h-28 overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {post.body}
              </p>
              <div className="my-4 w-full border-t border-gray-200"></div>
              <div className="mt-4 flex  justify-between">
                <p className="text-sm text-gray-500">{formattedDate}</p>
                <p className="ml-4 text-sm text-gray-500">{post.id}개의 댓글</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
