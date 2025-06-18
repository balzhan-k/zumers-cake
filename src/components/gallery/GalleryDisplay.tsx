"use client";
import React, { useState } from "react";
import { GalleryItem } from "@/lib/galleryData";
import CustomButton from "../common/CustomButton";

import Image from "next/image";
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

  const filteredItems = galleryItems.filter((item) => {
    if (!activeCategory) {
      return true;
    }
    return item.category === activeCategory;
  });

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.src}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="relative w-full h-96 mb-4 rounded-md overflow-hidden">
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
    </>
  );
}
