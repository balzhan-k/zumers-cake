import { getGalleryData } from "@/lib/galleryData";
import GalleryDisplay from "@/components/gallery/GalleryDisplay";
import TextElement from "@/components/common/TextElement";

export default function Gallery() {
  const { items, categories } = getGalleryData();

  return (
    <main className="container mx-auto px-4 py-8 pb-20">
      <TextElement variant="h2" className="text-center pb-4 text-rose-700">
        Lezzetlerimizin galerisi
      </TextElement>
      <GalleryDisplay galleryItems={items} categories={categories} />
    </main>
  );
}
