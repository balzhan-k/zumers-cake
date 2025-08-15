"use client";

import React from "react";
import Image from "next/image";
import TextElement from "@/components/common/TextElement";

interface ImageModalProps {
  src: string;
  onClose: () => void;
  alt: string;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  isVisible: boolean;
  title?: string;
  variant?: "gallery" | "about";
  showTitle?: boolean;
}

export default function ImageModal({
  src,
  onClose,
  alt,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  isVisible,
  title,
  variant = "gallery",
  showTitle = true,
}: ImageModalProps) {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-7xl w-full max-h-[95vh] flex flex-col items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`bg-stone-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform duration-300 ease-in-out ${variant === "about" ? "w-full" : "w-1/2"} h-full overflow-y-auto`}
        >
          <div className="relative w-full h-[85vh] mb-4 rounded-md overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md"
              sizes="100vw"
              priority
            />
          </div>
          {showTitle && (
            <TextElement variant="h3" className="text-rose-500">
              {title}
            </TextElement>
          )}
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-opacity-75 transition-colors z-50"
          aria-label="Close image"
        >
          &times;
        </button>

        {hasPrev && (
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className={`
    absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full
    bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors z-50
    ${!hasPrev ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
  `}
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />{" "}
            </svg>
          </button>
        )}

        {hasNext && (
          <button
            onClick={onNext}
            disabled={!hasNext}
            className={`
            absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full
            bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors z-50
            ${!hasNext ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          `}
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
