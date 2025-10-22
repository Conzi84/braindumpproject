import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-concreteWhite flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="font-display font-bold text-9xl text-brainDumpGray">
            404
          </span>
        </div>
        
        {/* Message */}
        <h1 className="font-display font-bold text-4xl mb-4 text-black">
          Page Not Found
        </h1>
        
        <p className="font-body text-lg text-deepSlate mb-12 max-w-md mx-auto">
          This note doesn't exist yet. Maybe it's still in my Obsidian vault, 
          waiting to be dumped here.
        </p>
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-black text-concreteWhite font-body font-semibold 
              hover:bg-mutedRust transition-colors"
          >
            ← Back Home
          </Link>
          
          <Link
            href="/blog"
            className="inline-block px-6 py-3 border-2 border-black text-black font-body font-semibold 
              hover:bg-black hover:text-concreteWhite transition-colors"
          >
            Browse Blog
          </Link>
          
          <Link
            href="/garden"
            className="inline-block px-6 py-3 border-2 border-black text-black font-body font-semibold 
              hover:bg-black hover:text-concreteWhite transition-colors"
          >
            Explore Garden
          </Link>
        </div>
        
        {/* Footer Note */}
        <p className="font-body text-sm text-deepSlate mt-16">
          Lost? All paths lead back to the brain dump.
        </p>
      </div>
    </div>
  );
}
