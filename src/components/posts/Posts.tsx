import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import HomeGrid from '../home/HomeGrid';
import { getAllPostsFromSeries } from '@/lib/postUtils';

export default function Posts() {
  const theme = useSelector((state: any) => state.ui.darkMode.theme);
  const series = useSelector((state: any) => state.data.series);

  console.log('theme:', theme);

  console.log('series:', series);

  // const allPosts = getAllPostsFromSeries(series);
  // const topTags = series.flatMap((series: any) => series.tags);

  const posts = [
    { slug: 'first-post', title: 'First Post', date: '2021-01-01', content: 'This is the first post.', tags: [{ name: 'React', count: 1 }] },
  ];
  const topTags = [{ name: 'React', count: 1 }];

  return (
    <>
      <HomeGrid posts={posts} topTags={topTags} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
