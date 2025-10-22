// app/garden/page.tsx
import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export default async function GardenPage() {
  const notes = await getAllPosts('garden');

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold font-heading text-stark-black mb-4">
        Digital Garden
      </h1>
      <p className="text-xl text-brain-dump-gray font-light mb-16">
        Growing ideas, notes, and evergreen content.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {notes.length === 0 ? (
          <p className="text-brain-dump-gray font-light col-span-full">
            No notes yet. The garden is being planted.
          </p>
        ) : (
          notes.map((note) => (
            <Link
              key={note.slug}
              href={`/garden/${note.slug}`}
              className="group border-2 border-gray-300 p-6 hover:border-muted-rust transition-colors"
            >
              <h2 className="text-2xl font-bold font-heading text-stark-black mb-3 group-hover:text-muted-rust transition-colors">
                {note.title}
              </h2>
              <p className="text-brain-dump-gray font-light text-sm mb-4 line-clamp-3">
                {note.excerpt}
              </p>
              <time className="text-xs text-brain-dump-gray font-light">
                {note.date}
              </time>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
