import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMarkdownContent(folder: 'blog' | 'garden', slug: string) {
  const fullPath = path.join(contentDirectory, folder, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...data,
  };
}

export function getAllMarkdownSlugs(folder: 'blog' | 'garden') {
  const folderPath = path.join(contentDirectory, folder);
  
  if (!fs.existsSync(folderPath)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(folderPath);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}

export async function getAllMarkdownPosts(folder: 'blog' | 'garden') {
  const slugs = getAllMarkdownSlugs(folder);
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const content = await getMarkdownContent(folder, slug);
      return content;
    })
  );
  
  return posts.sort((a: any, b: any) => {
    if (a.date < b.date) return 1;
    return -1;
  });
}
```

**content/blog/.gitkeep:**
```
# Place your blog markdown files here
```

**content/garden/.gitkeep:**
```
# Place your digital garden markdown files here
