// app/blog/page.tsx
import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export default async function BlogPage() {
  const posts = await getAllPosts('blog');

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold font-heading text-stark-black mb-4">
        Blog
      </h1>
      <p className="text-xl text-brain-dump-gray font-light mb-16">
        Longer-form thoughts and explorations.
      </p>

      {/* Posts List */}
      <div className="space-y-12">
        {posts.length === 0 ? (
          <p className="text-brain-dump-gray font-light">
            No posts yet. Check back soon.
          </p>
        ) : (
          posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-300 pb-12 last:border-0">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-3xl font-bold font-heading text-stark-black mb-3 hover:text-muted-rust transition-colors">
                  {post.title}
                </h2>
              </Link>
              <div className="flex gap-4 text-sm text-brain-dump-gray font-light mb-4">
                <time>{post.date}</time>
              </div>
              <p className="text-brain-dump-gray font-light leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-muted-rust font-heading font-semibold hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
