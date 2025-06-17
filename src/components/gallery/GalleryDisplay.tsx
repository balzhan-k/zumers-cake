"use client";
import React, { useState } from "react";
import { GalleryItem } from "@/lib/galleryData";

import Image from "next/image";

interface GalleryDisplayProps {
  galleryItems: GalleryItem[];
  categories: string[];
}

export default function GalleryDisplay({
  galleryItems,
  categories,
}: GalleryDisplayProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0] || ""); // Set default to first category or empty

  const filteredItems = galleryItems.filter((item) => {
    if (!activeCategory || activeCategory === "All") {
      // Re-add "All" check if you change your mind later
      return true;
    }
    return item.category === activeCategory;
  });

  return (
    <>
      {/* Category Buttons - Copy from old gallery/page.tsx */}
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
            style={{ minWidth: "150px" }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid - Copy from old gallery/page.tsx */}
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
            <h2 className="text-xl font-semibold mb-2 text-rose-600">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      {/* Optional: Add messages if no items found */}
      {filteredItems.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No items found for this category.
        </p>
      )}
    </>
  );
}
