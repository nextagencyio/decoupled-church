export default function Loading() {
  return (
    <div className="min-h-screen bg-[#faf8f5] animate-pulse">
      <div className="bg-[#faf8f5] border-b border-primary-200 h-24" />
      <div className="bg-[#faf8f5] py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="h-10 bg-primary-100 rounded w-64 mx-auto mb-4" />
          <div className="w-24 h-0.5 bg-primary-200 mx-auto mb-4" />
          <div className="h-6 bg-primary-50 rounded w-96 mx-auto" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white border-l-4 border-primary-200 shadow-sm overflow-hidden">
              <div className="h-48 bg-gray-100" />
              <div className="p-6 space-y-3">
                <div className="h-4 bg-primary-50 rounded w-24" />
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-100 rounded w-full" />
                <div className="h-4 bg-gray-100 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
