"use client";
import React, { useState } from "react";
import { GalleryItem } from "@/lib/galleryData";
import Image from "next/image";
import ImageModal from "./ImageModal";
import CustomButton from "../common/CustomButton";
import TextElement from "../common/TextElement";

interface GalleryDisplayProps {
  galleryItems: GalleryItem[];
  categories: string[];
}

export default function GalleryDisplay({
  galleryItems,
  categories,
}: GalleryDisplayProps) {
  const [activeCategory, setActiveCategory] = useState("Doğum Günü");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (!activeCategory) {
      return true;
    }
    return item.category === activeCategory;
  });

  const currentIndex = selectedImage
    ? filteredItems.findIndex((item) => item.src === selectedImage.src)
    : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < filteredItems.length - 1;

  const handleNext = () => {
    if (hasNext) {
      setSelectedImage(filteredItems[currentIndex + 1]);
    }
  };
  const handlePrev = () => {
    if (hasPrev) {
      setSelectedImage(filteredItems[currentIndex - 1]);
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <CustomButton
            key={category}
            value={category}
            text={category}
            onClick={() => setActiveCategory(category)}
            isSelected={activeCategory === category}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:max-w-7xl mx-auto gap-6 cursor-pointer">
        {filteredItems.map((item) => (
          <div
            key={item.src}
            onClick={() => {
              setIsModalOpen(true);
              setSelectedImage(item);
            }}
            className="bg-stone-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <TextElement variant="h3" className="text-rose-500">
              {" "}
              {item.title}
            </TextElement>
          </div>
        ))}
      </div>
      {filteredItems.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No items found for this category.
        </p>
      )}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.title}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedImage(null);
          }}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={hasNext}
          hasPrev={hasPrev}
          isVisible={isModalOpen}
          title={selectedImage.title}
        />
      )}
    </>
  );
}
