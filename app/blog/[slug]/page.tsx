// app/blog/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await getAllPosts('blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug('blog', params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-block text-brain-dump-gray hover:text-muted-rust font-heading font-semibold mb-8"
      >
        ← Back to Blog
      </Link>

      {/* Post Header */}
      <header className="mb-12">
        <h1 className="text-5xl font-bold font-heading text-stark-black mb-4">
          {post.title}
        </h1>
        <div className="flex gap-4 text-brain-dump-gray font-light">
          <time>{post.date}</time>
        </div>
      </header>

      {/* Post Content */}
      <article
        className="prose prose-lg prose-neutral max-w-none
          prose-headings:font-heading prose-headings:font-bold prose-headings:text-stark-black
          prose-p:text-brain-dump-gray prose-p:font-light prose-p:leading-relaxed
          prose-a:text-muted-rust prose-a:no-underline hover:prose-a:underline
          prose-strong:text-stark-black prose-strong:font-semibold"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
