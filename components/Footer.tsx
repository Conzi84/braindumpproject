export default function Footer() {
  return (
    <footer className="border-t-4 border-stark-black bg-brain-dump-gray mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-deep-slate text-sm">
          © {new Date().getFullYear()} Brain Dump Project. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
