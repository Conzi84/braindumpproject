import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Post {
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
  category?: string;
  content: string;
}

/**
 * Get all posts from a specific directory (blog or garden)
 */
export async function getAllPosts(type: 'blog' | 'garden'): Promise<Post[]> {
  const postsDirectory = path.join(contentDirectory, type);
  
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Directory not found: ${postsDirectory}`);
    return [];
  }
  
  let fileNames: string[];
  
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error(`Error reading directory ${postsDirectory}:`, error);
    return [];
  }
  
  // Filter for .md files only
  const mdFiles = fileNames.filter(fileName => fileName.endsWith('.md'));
  
  if (mdFiles.length === 0) {
    console.warn(`No .md files found in ${postsDirectory}`);
    return [];
  }
  
  const posts = await Promise.all(
    mdFiles.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const post = await getPostBySlug(slug, type);
      return post;
    })
  );
  
  // Filter out any null posts (failed to load)
  const validPosts = posts.filter((post): post is Post => post !== null);
  
  // Sort by date (newest first)
  return validPosts.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(
  slug: string, 
  type: 'blog' | 'garden'
): Promise<Post | null> {
  const postsDirectory = path.join(contentDirectory, type);
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fullPath}`);
    return null;
  }
  
  let fileContents: string;
  
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error);
    return null;
  }
  
  let matterResult;
  
  try {
    matterResult = matter(fileContents);
  } catch (error) {
    console.error(`Error parsing frontmatter in ${fullPath}:`, error);
    return null;
  }
  
  // Process markdown content to HTML
  let contentHtml: string;
  
  try {
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(matterResult.content);
    contentHtml = processedContent.toString();
  } catch (error) {
    console.error(`Error processing markdown in ${fullPath}:`, error);
    contentHtml = `<p>Error rendering content</p>`;
  }
  
  // Return post with fallbacks for missing data
  return {
    slug,
    title: matterResult.data.title || 'Untitled',
    date: matterResult.data.date || null,
    excerpt: matterResult.data.excerpt || null,
    category: matterResult.data.category || null,
    content: contentHtml,
  };
}

/**
 * Get all unique categories from garden notes
 */
export async function getCategories(): Promise<string[]> {
  const notes = await getAllPosts('garden');
  
  const categories = notes
    .map(note => note.category)
    .filter((category): category is string => category !== null && category !== undefined);
  
  // Return unique categories
  return Array.from(new Set(categories));
}
