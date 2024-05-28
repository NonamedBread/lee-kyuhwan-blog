import React, { useMemo } from 'react';
import { GetStaticProps } from 'next';
import { useDispatch } from 'react-redux';

import { setAllSeries } from '@/modules/posts';
import { getPostsGroupedBySeries } from '@/lib/postUtils';

import HomeGrid from '@/components/home/HomeGrid';
import HomeLayout from '@/components/home/HomeLayout';
import { useEffect } from 'react';

interface Series {
  [series: string]: {
    seriesName: string;
    posts: {
      slug: string;
      title: string;
      date: string;
      content: string;
      tags: {
        name: string;
        count: number;
      }[];
    }[];
  }[];
}

export default function Home({ series }: Series) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllSeries(series));
  }, [dispatch, series]);

  return (
    <HomeLayout>
      <HomeGrid />
    </HomeLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allSeries = await getPostsGroupedBySeries();

  return {
    props: {
      series: allSeries,
    },
  };
};
