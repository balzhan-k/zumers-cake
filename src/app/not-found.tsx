import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center bg-rose-50 p-8">
      <h1 className="text-6xl font-bold text-rose-700 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Sayfa Bulunamadı
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen URL&#39;yi
        kontrol edin veya ana sayfaya geri dönün.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors shadow-md"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
