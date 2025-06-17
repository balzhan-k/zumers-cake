import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

const galleryItems: GalleryImage[] = [
  {
    src: "/gallery/bday cakes/Cake (1).jpeg",
    title: "Masal Ormanı",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (2).jpeg",
    title: "Uzay Macerası",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (3).jpeg",
    title: "Kış Masalı",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (4).jpeg",
    title: "Dünya Gezgini",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (5).jpeg",
    title: "Minyon Çılgınlığı",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (6).jpeg",
    title: "Pony'nin Şeker Bahçesi",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (7).jpeg",
    title: "Kalpten Gelen Lezzet",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (8).jpeg",
    title: "Süper Kahramanlar Zirvesi",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (9).jpeg",
    title: "Mavi Rüyalar Arabası",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (10).jpeg",
    title: "Şeker Ev",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (11).jpeg",
    title: "Pembe Zarafet",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (12).jpeg",
    title: "Şampiyonluk Sahası",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (13).jpeg",
    title: "Kazlar Sürüsü",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (14).jpeg",
    title: "Pikachu Gücü",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (15).jpeg",
    title: "Buz Krallığı",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (16).jpeg",
    title: "Neşeli Lolipop",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (17).jpeg",
    title: "Çiçek Bahçesi Zarafeti",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (18).jpeg",
    title: "Bal Kovası Eğlencesi",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (19).jpeg",
    title: "Deniz Kızı Teknesi",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (20).jpeg",
    title: "Sirk Gösterisi",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (21).jpeg",
    title: "Uzay Macerası",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (22).jpeg",
    title: "Pamuk Kalpli Ayıcık",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (23).jpeg",
    title: "Orman Savaşçısı",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (24).jpeg",
    title: "Balonlu Pooh ve Tigger",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (25).jpeg",
    title: "Orman Ceylanı",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (26).jpeg",
    title: "Deniz Kızı Ariel",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (27).jpeg",
    title: "Fortnite Savaşı",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (28).jpeg",
    title: "Sevimli Fil",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (29).jpeg",
    title: "Yin Yang Doğum Günü",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (30).jpeg",
    title: "Çağatay'ın Tankı",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (31).jpeg",
    title: "Horoz Şekeri",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (32).jpeg",
    title: "Küçük Tilki",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (33).jpeg",
    title: "Şirin Kuzu",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (34).jpeg",
    title: "Ahududu Rüyası",
    category: "Bday Cakes",
  },
  {
    src: "/gallery/bday cakes/Cake (35).jpeg",
    title: "Mavi Kule",
    category: "Bday Cakes",
  },
];

const categories = [
  "All",
  "Bday Cakes",
  "Occasion Cakes",
  "Cupcakes",
  "Cookies",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <main className="container mx-auto px-4 py-8 bg-rose-50">
      <h1 className="text-4xl font-bold mb-6">Galeri</h1>
      <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
        Explore our delightful creations, handcrafted with love and the finest
        ingredients. Find the perfect centerpiece for your next celebration or a
        sweet treat just for you.
      </p>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out
              ${
                activeCategory === category
                  ? "bg-rose-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-rose-100 hover:text-rose-600"
              }
            `}
            style={{ minWidth: "150px" }} // Optional: ensure minimum width for buttons
          >
            {category}
          </button>
        ))}
      </div>
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.src}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="relative w-full h-60 mb-4 rounded-md overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill // Use fill to make image cover its parent div
                style={{ objectFit: "cover" }} // Image will cover the area
                className="rounded-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-rose-600">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm">{item.category}</p>
          </div>
        ))}
      </div>
      {galleryItems.length === 0 && activeCategory !== "All" && (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No items found for this category.
        </p>
      )}
      {galleryItems.length === 0 && activeCategory === "All" && (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No gallery items available.
        </p>
      )}
    </main>
  );
}
