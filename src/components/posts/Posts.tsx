import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import HomeGrid from '../home/HomeGrid';

export default function Posts() {
  const series = useSelector((state: any) => state.data.series);

  return (
    <>
      <HomeGrid series={series} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
