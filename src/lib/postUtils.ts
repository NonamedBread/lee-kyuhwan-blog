import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

interface PostData {
  slug: string;
  title: string;
  date: Date;
  content: string;
  isFeatured: boolean;
  isDraft?: boolean;
  tags: string[];
}

export function getPostsFiles(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier: string): PostData {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  const postData: PostData = {
    slug: postSlug.replace(/\.md$/, ''), // remove .md extension
    title: data.title,
    date: data.date,
    content: content,
    isFeatured: data.isFeatured || false,
    isDraft: data.isDraft || false,
    tags: data.tags || [],
  };

  return postData;
}

export function getAllPosts(): PostData[] {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map(getPostData);

  const sortedPosts = allPosts.sort((postA: PostData, postB: PostData) => new Date(postB.date).getTime() - new Date(postA.date).getTime());
  const draftPosts = sortedPosts.filter((post) => process.env.NODE_ENV === 'development' || !post.isDraft);

  return draftPosts;
}

export function getFeaturedPosts(): PostData[] {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();

  // 모든 게시물에서 태그를 추출하고, 하나의 배열로 합칩니다.
  const allTags = allPosts.flatMap((post) => post.tags);

  // 태그의 빈도를 계산합니다.
  const tagFrequency: { [tag: string]: number } = {};
  allTags.forEach((tag) => {
    if (tag in tagFrequency) {
      tagFrequency[tag]++;
    } else {
      tagFrequency[tag] = 1;
    }
  });

  // 빈도에 따라 태그를 정렬합니다.
  const sortedTags = Object.keys(tagFrequency).sort((a, b) => tagFrequency[b] - tagFrequency[a]);

  // 처음 10개의 태그만 반환합니다.
  return sortedTags.slice(0, 10);
}
