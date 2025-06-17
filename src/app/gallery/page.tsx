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
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (2).jpeg",
    title: "Uzay Macerası",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (3).jpeg",
    title: "Kış Masalı",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (4).jpeg",
    title: "Dünya Gezgini",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (5).jpeg",
    title: "Minyon Çılgınlığı",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (6).jpeg",
    title: "Pony'nin Şeker Bahçesi",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (7).jpeg",
    title: "Kalpten Gelen Lezzet",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (8).jpeg",
    title: "Süper Kahramanlar Zirvesi",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (9).jpeg",
    title: "Mavi Rüyalar Arabası",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (10).jpeg",
    title: "Şeker Ev",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (11).jpeg",
    title: "Pembe Zarafet",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (12).jpeg",
    title: "Şampiyonluk Sahası",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (13).jpeg",
    title: "Kazlar Sürüsü",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (14).jpeg",
    title: "Pikachu Gücü",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (15).jpeg",
    title: "Buz Krallığı",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (16).jpeg",
    title: "Neşeli Lolipop",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (17).jpeg",
    title: "Çiçek Bahçesi Zarafeti",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (18).jpeg",
    title: "Bal Kovası Eğlencesi",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (19).jpeg",
    title: "Deniz Kızı Teknesi",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (20).jpeg",
    title: "Sirk Gösterisi",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (21).jpeg",
    title: "Uzay Macerası",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (22).jpeg",
    title: "Pamuk Kalpli Ayıcık",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (23).jpeg",
    title: "Orman Savaşçısı",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (24).jpeg",
    title: "Balonlu Pooh ve Tigger",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (25).jpeg",
    title: "Orman Ceylanı",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (26).jpeg",
    title: "Deniz Kızı Ariel",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (27).jpeg",
    title: "Fortnite Savaşı",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (28).jpeg",
    title: "Sevimli Fil",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (29).jpeg",
    title: "Yin Yang Doğum Günü",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (30).jpeg",
    title: "Çağatay'ın Tankı",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (31).jpeg",
    title: "Horoz Şekeri",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (32).jpeg",
    title: "Küçük Tilki",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (33).jpeg",
    title: "Şirin Kuzu",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (34).jpeg",
    title: "Ahududu Rüyası",
    category: "Doğum Günü",
  },
  {
    src: "/gallery/bday cakes/Cake (35).jpeg",
    title: "Mavi Kule",
    category: "Doğum Günü",
  },
];



export default function Gallery() {
  return (
    <main className="container mx-auto px-4 py-8 bg-rose-50">
      <h1 className="text-4xl font-bold mb-6">Galeri</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryItems.map((item) => (
          <div
            key={item.src} // Essential for list rendering
            className="bg-stone-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={300} // Placeholder, adjust as needed
              height={500} // Placeholder, adjust as needed
              className="w-full h-96 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          
          </div>
        ))}
      </div>
    </main>
  );
}
