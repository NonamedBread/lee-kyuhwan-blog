import { GetStaticProps } from 'next';

import { getAllPosts } from '@/lib/postUtils';

import Posts from '@/components/posts/Posts';

interface Props {
  posts: {
    slug: string;
    title: string;
    date: string;
    content: string;
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
  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
};
