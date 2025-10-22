export default function GardenLoading() {
  return (
    <div className="min-h-screen bg-concreteWhite py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-16">
          <div className="h-12 w-64 bg-brainDumpGray animate-pulse mb-4"></div>
          <div className="h-6 w-96 bg-brainDumpGray animate-pulse"></div>
        </div>
        
        {/* Gallery Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <article 
              key={i}
              className="border-2 border-brainDumpGray bg-concreteWhite p-6"
            >
              {/* Category Badge */}
              <div className="h-6 w-20 bg-brainDumpGray animate-pulse mb-4"></div>
              
              {/* Title */}
              <div className="h-8 w-full bg-brainDumpGray animate-pulse mb-4"></div>
              
              {/* Excerpt */}
              <div className="space-y-2 mb-6">
                <div className="h-4 w-full bg-brainDumpGray animate-pulse"></div>
                <div className="h-4 w-4/5 bg-brainDumpGray animate-pulse"></div>
                <div className="h-4 w-3/5 bg-brainDumpGray animate-pulse"></div>
              </div>
              
              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-brainDumpGray">
                <div className="h-4 w-24 bg-brainDumpGray animate-pulse"></div>
                <div className="h-6 w-16 bg-brainDumpGray animate-pulse"></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
