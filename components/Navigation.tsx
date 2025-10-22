import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-b-4 border-stark-black bg-concrete-white">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-montserrat font-bold text-2xl">
            BRAIN DUMP
          </Link>
          <div className="flex gap-8 font-open-sans font-semibold text-sm">
            <Link href="/blog" className="hover:text-muted-rust transition-colors">
              Blog
            </Link>
            <Link href="/garden" className="hover:text-muted-rust transition-colors">
              Digital Garden
            </Link>
            <Link href="/resources" className="hover:text-muted-rust transition-colors">
              Resources
            </Link>
            <Link href="/about" className="hover:text-muted-rust transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-muted-rust transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
