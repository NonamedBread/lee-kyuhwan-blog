import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import PostContent from '@/components/posts/\bPostDetail/PostContent';

import { getPostData, getPostsFiles } from '@/lib/postUtils';

export default function PostDetailPage(props: any) {
  const { post } = props;

  return (
    <div className="flex min-h-screen flex-col items-center ">
      <PostContent post={post} />
    </div>
  );
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;

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

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
