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
  try {
    const postFilenames = await getPostsFiles();
    console.log('postFilenames:', postFilenames); // 추가: 파일 이름 로그

    const paths = postFilenames.map((fileName) => {
      const slug = fileName.path.replace(/\.md$/, '').split('/').slice(1);
      console.log('slug:', slug); // 추가: 슬러그 로그
      return { params: { slug } };
    });

    console.log('paths:', paths); // 추가: 경로 로그

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error); // 추가: 오류 로그
    throw error;
  }
}
