import { GetStaticProps } from "next";

interface Props {
  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-red-100">
      <h1 className="text-6xl font-bold">Posts</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // dummy data
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
