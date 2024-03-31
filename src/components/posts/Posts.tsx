import React, { useState } from 'react';

import PostItem from './PostItem';
import NoSearchResult from '../common/NoSearchResult';

interface Posts {
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
  handleTagClick: (tag: string) => void;
}

export default function Posts({ posts, handleTagClick }: Posts) {
  return (
    <>
      {posts && posts.length > 0 ? posts.map((post) => <PostItem key={post.slug} post={post} handleTagClick={handleTagClick} />) : <NoSearchResult />}
    </>
  );
}
