// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-200px)]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-6xl font-bold font-heading text-stark-black mb-6">
          Brain Dump
        </h1>
        <p className="text-2xl text-brain-dump-gray font-light mb-12 leading-relaxed">
          A space for thoughts, ideas, and learnings. <br />
          Building in public, one note at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-6">
          <Link
            href="/blog"
            className="px-8 py-4 bg-stark-black text-concrete-white font-heading font-semibold hover:bg-muted-rust transition-colors"
          >
            Read Blog
          </Link>
          <Link
            href="/garden"
            className="px-8 py-4 border-2 border-stark-black text-stark-black font-heading font-semibold hover:border-muted-rust hover:text-muted-rust transition-colors"
          >
            Explore Garden
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-300">
        <h2 className="text-3xl font-bold font-heading text-stark-black mb-8">
          Latest Thoughts
        </h2>
        <p className="text-brain-dump-gray font-light mb-6">
          Recent posts and notes will appear here once content is added.
        </p>
        <Link
          href="/blog"
          className="text-muted-rust font-heading font-semibold hover:underline"
        >
          View all posts →
        </Link>
      </section>
    </div>
  );
}
