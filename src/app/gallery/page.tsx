import { getGalleryData } from "@/lib/galleryData";
import GalleryDisplay from "@/components/gallery/GalleryDisplay";

export default function Gallery() {
  const { items, categories } = getGalleryData();

  return (
    <main className="container mx-auto px-4 pt-8 pb-20">
      <GalleryDisplay galleryItems={items} categories={categories} />
    </main>
  );
}
