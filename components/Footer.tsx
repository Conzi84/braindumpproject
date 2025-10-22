// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-300 bg-concrete-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-heading text-stark-black mb-4">
              Brain Dump
            </h3>
            <p className="text-brain-dump-gray font-light">
              Thoughts, ideas, and learnings from the journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-stark-black mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-brain-dump-gray hover:text-muted-rust transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/garden" className="text-brain-dump-gray hover:text-muted-rust transition-colors">
                  Digital Garden
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-brain-dump-gray hover:text-muted-rust transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold text-stark-black mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-brain-dump-gray hover:text-muted-rust transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brain-dump-gray hover:text-muted-rust transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <p className="text-brain-dump-gray font-light text-sm">
            © {currentYear} Brain Dump. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
