export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <span className="animate-spin rounded-full h-16 w-16 border-t-4 border-rose-500 border-solid"></span>
      <span className="ml-4 text-rose-500 text-xl">Sayfa yükleniyor...</span>
    </div>
  );
}