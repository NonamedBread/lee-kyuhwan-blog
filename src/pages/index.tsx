import { GetStaticProps } from 'next';
import { useDispatch } from 'react-redux';
import { setPosts, setTags } from '@/modules/posts';

import { getAllPosts, getAllTags } from '@/lib/postUtils';

import Posts from '@/components/posts/Posts';
import { useEffect } from 'react';

interface Props {
  posts: {
    slug: string;
    title: string;
    date: string;
    content: string;
    tags: string[];
  }[];
  allTags: {
    name: string;
    count: number;
  }[];
}

export default function Home({ posts, allTags }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPosts(posts));
    dispatch(setTags(allTags));
  }, [dispatch, posts, allTags]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Posts />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return {
    props: {
      posts: posts,
      allTags: allTags,
    },
  };
};
