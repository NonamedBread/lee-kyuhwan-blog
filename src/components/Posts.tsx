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
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  let formattedDate = yyyy + "년 " + mm + "월 " + dd + "일";
  console.log(formattedDate);
  return (
    <div className="flex flex-wrap min-h-screen py-2 ">
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-[45dvh] p-4 "
        >
          <div className="h-full rounded shadow overflow-auto bg-white dark:bg-gray-900">
            <div className="relative h-2/5 rounded">
              <Image
                src="/images/dummy_image.png"
                layout="fill"
                objectFit="cover"
                alt={post.title}
              />
            </div>
            <div className="w-full h-3/5 p-4 ">
              <div>
                <h2 className="font-bold mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap">
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
              <div className="w-full border-t border-gray-200 my-4"></div>
              <div className="flex justify-between  mt-4">
                <p className="text-sm text-gray-500">{formattedDate}</p>
                <p className="text-sm text-gray-500 ml-4">{post.id}개의 댓글</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
