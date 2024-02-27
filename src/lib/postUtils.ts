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
    tags: data.tags || [],
  };

  return postData;
}

export function getAllPosts(): PostData[] {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((post) => {
    return getPostData(post);
  });

  const sortedPosts = allPosts.sort((postA: PostData, postB: PostData) => (postA.date > postB.date ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts(): PostData[] {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
