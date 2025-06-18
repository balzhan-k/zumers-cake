import { getGalleryData } from "@/lib/galleryData";
import GalleryDisplay from "@/components/gallery/GalleryDisplay";

export default function Gallery() {
  const { items, categories } = getGalleryData();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-rose-700">
        Lezzetlerimizin Galerisi
      </h1>

      <GalleryDisplay galleryItems={items} categories={categories} />
    </main>
  );
}
