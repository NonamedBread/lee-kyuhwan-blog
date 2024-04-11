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

export async function getStaticProps(context: { params: { slug: string[] } }) {
  const { params } = context;
  const slug = params.slug;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const paths = postFilenames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '').split('/');
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
