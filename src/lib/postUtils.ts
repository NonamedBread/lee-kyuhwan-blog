import path from 'path';
import matter from 'gray-matter';

const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;
const token = process.env.GITHUB_TOKEN;

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

interface GitHubFile {
  type: string;
  path: string;
  name: string;
}

async function fetchFromGitHub(path: string): Promise<any> {
  if (!owner || !repo || !token) {
    throw new Error('GitHub environment variables are not set');
  }

  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  return await response.json();
}

async function fetchFiles(path: string): Promise<GitHubFile[]> {
  return await fetchFromGitHub(path);
}

async function fetchAllMdFiles(path: string): Promise<GitHubFile[]> {
  const files = await fetchFiles(path);
  const mdFiles: GitHubFile[] = [];

  for (const file of files) {
    if (file.type === 'dir') {
      const dirFiles = await fetchAllMdFiles(file.path);
      mdFiles.push(...dirFiles);
    } else if (file.name.endsWith('.md')) {
      mdFiles.push(file);
    }
  }

  return mdFiles;
}

async function convertMdToYaml(file: GitHubFile): Promise<string> {
  const data = await fetchFromGitHub(file.path);
  const content = Buffer.from(data.content, 'base64').toString('utf8');

  const { data: frontmatter, content: body } = matter(content);

  return JSON.stringify({ frontmatter, body }, null, 2);
}

export async function getPostsFiles(): Promise<GitHubFile[]> {
  return await fetchAllMdFiles('');
}

function groupPostsBySeries(posts: PostData[]): { [series: string]: PostData[] } {
  return posts.reduce(
    (groupedPosts: { [series: string]: PostData[] }, post: PostData) => {
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
}

export async function getPostsGroupedBySeries(): Promise<{ seriesName: string; posts: PostData[] }[]> {
  const postFiles = await getPostsFiles();

  const allPosts = await Promise.all(
    postFiles.map(async (postFile) => {
      const fileContent = await convertMdToYaml(postFile);
      const { frontmatter, body } = JSON.parse(fileContent);
      const series = path.basename(path.dirname(postFile.path));

      return {
        slug: path.basename(postFile.path, '.md'),
        series: series === '.' ? undefined : series,
        title: frontmatter.title,
        date: frontmatter.date,
        content: body,
        isFeatured: frontmatter.isFeatured || false,
        isDraft: frontmatter.isDraft || false,
        tags: frontmatter?.tags?.map((tag: string) => ({ name: tag, count: 1 })) || [],
      };
    }),
  );

  const sortedPosts = allPosts.sort((postA: PostData, postB: PostData) => new Date(postB.date).getTime() - new Date(postA.date).getTime());
  const draftPosts = sortedPosts.filter((post: PostData) => process.env.NODE_ENV === 'development' || !post.isDraft);

  const postsGroupedBySeries = groupPostsBySeries(draftPosts);

  return Object.entries(postsGroupedBySeries).map(([seriesName, posts]: [string, PostData[]]) => ({
    seriesName,
    posts,
  }));
}

export function getAllPostsFromSeries(series: Series[]) {
  return series.flatMap((s) => s.posts);
}

export async function getPostData(locale: string, slug: string[]): Promise<PostData> {
  const postIdentifier = slug.join('/');
  const postSlug = postIdentifier.replace(/\.md$/, '');

  const filePath = path.join(locale, ...slug) + '.md';

  const data = await fetchFromGitHub(filePath);
  const content = Buffer.from(data.content, 'base64').toString('utf8');

  const { data: frontmatter, content: body } = matter(content);

  const postData: PostData = {
    slug: path.basename(postSlug),
    series: path.dirname(postSlug),
    title: frontmatter.title,
    date: frontmatter.date,
    content: body,
    isFeatured: frontmatter.isFeatured || false,
    isDraft: frontmatter.isDraft || false,
    tags: frontmatter?.tags?.map((tag: string) => ({ name: tag, count: 1 })) || [],
  };

  return postData;
}
