import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

interface Series {
  seriesName: string;
  posts: PostData[];
}
interface PostData {
  slug: string;
  series?: string;
  title: string;
  date: Date;
  content: string;
  isFeatured: boolean;
  isDraft?: boolean;
  tags: {
    name: string;
    count: number;
  }[];
}

export function getPostsFiles(dir: string = postsDirectory): string[] {
  const directories = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  let postsFiles: string[] = [];
  directories.forEach((dir) => {
    const dirPath = path.join(postsDirectory, dir);
    const files = fs.readdirSync(dirPath);
    const fullPaths = files.map((file) => path.join(dir, file));
    postsFiles = [...postsFiles, ...fullPaths];
  });

  return postsFiles;
  // return fs.readdirSync(postsDirectory);
}

export function getAllPostData(postIdentifier: string): PostData {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const series = path.dirname(postSlug);

  const postData: PostData = {
    slug: path.basename(postSlug),
    series: series === '.' ? undefined : series,
    title: data.title,
    date: data.date,
    content: content,
    isFeatured: data.isFeatured || false,
    isDraft: data.isDraft || false,
    tags: data?.tags.map((tag: string) => ({ name: tag, count: 1 })),
  };

  return postData;
}

export function getPostsGroupedBySeries(): { seriesName: string; posts: PostData[] }[] {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map(getAllPostData);
  const sortedPosts = allPosts.sort((postA: PostData, postB: PostData) => new Date(postB.date).getTime() - new Date(postA.date).getTime());
  const draftPosts = sortedPosts.filter((post) => process.env.NODE_ENV === 'development' || !post.isDraft);

  const postsGroupedBySeries = draftPosts.reduce(
    (groupedPosts, post) => {
      const series = post.series;
      if (series !== undefined) {
        if (!groupedPosts[series]) {
          groupedPosts[series] = [];
        }
        groupedPosts[series].push(post);
      }
      return groupedPosts;
    },
    {} as { [series: string]: PostData[] },
  );

  const postsGroupedBySeriesArray = Object.entries(postsGroupedBySeries).map(([seriesName, posts]) => ({
    seriesName,
    posts,
  }));

  return postsGroupedBySeriesArray;
}

export function getAllPostsFromSeries(series: Series[]) {
  console.log('series:', series);
  return series.flatMap((s) => s.posts);
}

export function getPostData(slug: string[]) {
  // slug 배열을 '/'로 연결하여 파일 경로를 생성합니다.
  const filePath = path.join(process.cwd(), 'posts', ...slug) + '.md';

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    content,
    ...data,
  };
}

// export function getAllTags(): PostData['tags'] {
//   const allPosts = getAllPosts();

//   const allTags = allPosts.flatMap((post) => post.tags.map((tag) => tag.name));

//   // 태그의 빈도를 계산합니다.
//   const tagFrequency: { [tag: string]: number } = {};
//   allTags.forEach((tag) => {
//     if (tag in tagFrequency) {
//       tagFrequency[tag]++;
//     } else {
//       tagFrequency[tag] = 1;
//     }
//   });

//   // 빈도에 따라 태그를 정렬합니다.
//   const sortedTags = Object.keys(tagFrequency).sort((a, b) => tagFrequency[b] - tagFrequency[a]);

//   // 각 태그를 Tag 객체로 변환합니다.
//   return sortedTags.map((tag) => ({ name: tag, count: tagFrequency[tag] }));
// }
