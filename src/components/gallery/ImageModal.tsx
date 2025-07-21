"use client";

import React from "react";
import Image from "next/image";

interface ImageModalProps {
  src: string;
  onClose: () => void;
  alt: string;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export default function ImageModal({
  src,
  onClose,
  alt,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: ImageModalProps) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg shadow-2xl"
          sizes="100vw"
          priority
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-opacity-75 transition-colors"
          aria-label="Close image"
        >
          &times;
        </button>

        {hasPrev && (
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className={` // (3)
    absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full
    bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors z-50
    ${!hasPrev ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} // (4)
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
