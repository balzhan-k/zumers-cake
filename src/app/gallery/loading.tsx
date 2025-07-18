export default function Loading() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center">
      <div className="w-2/3 h-10 bg-rose-200 rounded animate-pulse mt-10 mb-6" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 mx-auto">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="px-6 py-2 rounded-full bg-rose-100 opacity-60 animate-pulse"
            style={{ minWidth: 120, minHeight: 40 }}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-stone-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center animate-pulse"
          >
            <div className="relative w-full h-96 mb-4 rounded-md overflow-hidden bg-gray-200" />
            <div className="h-6 w-2/3 bg-rose-200 rounded mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
