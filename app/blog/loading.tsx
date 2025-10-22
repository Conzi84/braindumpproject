export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-concreteWhite py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-16">
          <div className="h-12 w-48 bg-brainDumpGray animate-pulse mb-4"></div>
          <div className="h-6 w-96 bg-brainDumpGray animate-pulse"></div>
        </div>
        
        {/* Post List Skeleton */}
        <div className="space-y-12">
          {[1, 2, 3].map((i) => (
            <article 
              key={i}
              className="border-b-2 border-brainDumpGray pb-12"
            >
              {/* Date */}
              <div className="h-4 w-32 bg-brainDumpGray animate-pulse mb-4"></div>
              
              {/* Title */}
              <div className="h-10 w-3/4 bg-brainDumpGray animate-pulse mb-4"></div>
              
              {/* Excerpt */}
              <div className="space-y-2 mb-6">
                <div className="h-4 w-full bg-brainDumpGray animate-pulse"></div>
                <div className="h-4 w-5/6 bg-brainDumpGray animate-pulse"></div>
              </div>
              
              {/* Read More Link */}
              <div className="h-6 w-24 bg-brainDumpGray animate-pulse"></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
