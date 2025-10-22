// app/garden/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const notes = await getAllPosts('garden');
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export default async function GardenNotePage({ params }: { params: { slug: string } }) {
  const note = await getPostBySlug('garden', params.slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Back Link */}
      <Link
        href="/garden"
        className="inline-block text-brain-dump-gray hover:text-muted-rust font-heading font-semibold mb-8"
      >
        ← Back to Garden
      </Link>

      {/* Note Header */}
      <header className="mb-12">
        <h1 className="text-5xl font-bold font-heading text-stark-black mb-4">
          {note.title}
        </h1>
        <div className="flex gap-4 text-sm text-brain-dump-gray font-light">
          <time>Last tended: {note.date}</time>
        </div>
      </header>

      {/* Note Content */}
      <article
        className="prose prose-lg prose-neutral max-w-none
          prose-headings:font-heading prose-headings:font-bold prose-headings:text-stark-black
          prose-p:text-brain-dump-gray prose-p:font-light prose-p:leading-relaxed
          prose-a:text-muted-rust prose-a:no-underline hover:prose-a:underline
          prose-strong:text-stark-black prose-strong:font-semibold"
        dangerouslySetInnerHTML={{ __html: note.content }}
      />
    </div>
  );
}
