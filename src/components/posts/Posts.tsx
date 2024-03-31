import React, { useState } from 'react';

import PostItem from './PostItem';

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
      {posts && posts.length > 0 ? (
        posts.map((post) => <PostItem key={post.slug} post={post} handleTagClick={handleTagClick} />)
      ) : (
        <div className="flex h-full w-full items-center text-2xl font-bold " data-testid="no-search-result">
          <div className="m-20 flex flex-col items-center">
            <span className="text-2xl font-bold">
              아쉽게도 검색 결과가 없네요.
              <span role="img" aria-label="Sad face" className="text-4xl">
                😅
              </span>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
