import { GetStaticProps } from 'next';

import Posts from '@/components/posts/Posts';

interface Props {
  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
}

export default function Home({ posts }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Posts posts={posts} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // dummy data
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts: posts.slice(0, 13),
    },
  };
};
