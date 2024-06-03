import React from 'react';

import PostContent from '@/components/posts/PostDetail/PostContent';
import PostsLayout from '@/components/posts/PostsLayout';

import { getPostsFiles, getPostData } from '@/lib/postUtils';

export default function PostDetailPage(props: any) {
  const { post } = props;

  return (
    <PostsLayout>
      <PostContent post={post} />
    </PostsLayout>
  );
}

export async function getStaticProps(context: { locale: string; params: { slug: string[] } }) {
  const { locale, params } = context;
  const slug = params.slug;

  const postData = await getPostData(locale, slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 10 * 1000, // 10 seconds
  };
}

export async function getStaticPaths() {
  const postFilenames = await getPostsFiles();

  const paths = postFilenames.map((fileName) => {
    const slug = fileName.path.replace(/\.md$/, '').split('/').slice(1);
    return { params: { slug } };
  });

  return {
    paths,
    fallback: true,
  };
}
