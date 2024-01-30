interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Posts({ posts }: { posts: Post[] }) {
  console.log("posts", posts);
  return (
    <div className="flex flex-wrap justify-center min-h-screen py-2 ">
      {posts.map((post) => (
        <div key={post.id} className="w-1/4 p-4">
          <div
            style={{ height: "35vh" }}
            className="p-6 rounded shadow overflow-auto bg-white dark:bg-gray-900"
          >
            <h2 className="font-bold mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
