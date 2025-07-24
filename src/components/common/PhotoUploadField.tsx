"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface PhotoUploadFieldProps {
  value: string[];
  onChange: (urls: string[]) => void;
  hintText: string;
  maxSizeMB: number;
  acceptedFileTypes: string[];
  maxFiles?: number;
}

export default function PhotoUploadField({
  value,
  onChange,
  hintText = "JPEG, JPG, WEBP",
  maxSizeMB = 10,
  acceptedFileTypes = ["image/jpeg", "image/jpeg", "image/webp"],
  maxFiles = 3,
}: PhotoUploadFieldProps) {
  const [previewUrls, setPreviewUrls] = useState<string[]>(value);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPreviewUrls(value);
  }, [value]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];

    if (files.length === 0) return;

    if (previewUrls.length + files.length > maxFiles) {
      alert(`En fazla ${maxFiles} fotoğraf yükleyebilirsiniz.`);
      e.target.value = "";
      return;
    }

    setIsLoading(true);
    const newUploadedUrls: string[] = [];

    for (const file of files) {
      if (file.size > maxSizeMB * 1024 * 1024) {
        alert(
          `Dosya boyutu ${file.name} için ${maxSizeMB}MB'tan büyük olamaz.`
        );
        continue; 
      }
      if (!acceptedFileTypes.includes(file.type)) {
        alert(`Lütfen ${file.name} için geçerli bir resim dosyası seçiniz.`);
        continue; 
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        if (!previewUrls.includes(reader.result as string)) {
          setPreviewUrls((prev) => [...prev, reader.result as string]);
        }
      };
      reader.readAsDataURL(file);

      try {
        const response = await fetch(`/api/upload?filename=${file.name}`, {
          method: "POST",
          body: file,
        });

        if (!response.ok) {
          throw new Error(
            `Upload failed for ${file.name} with status: ${response.status}`
          );
        }

        const newBlob = await response.json();
        newUploadedUrls.push(newBlob.url);
      } catch (error) {
        console.error(`Error uploading file ${file.name}:`, error);
        alert(`Fotoğraf yüklenirken bir hata oluştu: ${file.name}`);
      }
    }

    onChange([...value, ...newUploadedUrls]);
    setPreviewUrls((prev) => [...prev, ...newUploadedUrls]);

    setIsLoading(false);
    e.target.value = ""; 
  };

  const handleRemoveClick = (urlToRemove: string) => {
    const filteredUrls = previewUrls.filter((url) => url !== urlToRemove);
    setPreviewUrls(filteredUrls);
    onChange(filteredUrls);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-rose-500 transition-colors">
        <input
          type="file"
          id="photoUpload"
          accept={acceptedFileTypes.join(",")}
          className="hidden"
          onChange={handleFileChange}
          multiple 
          ref={fileInputRef}
        />

        {isLoading ? (
          <div className="flex items-center justify-center h-48">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-rose-500"></div>
          </div>
        ) : previewUrls.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {previewUrls.map((url) => (
              <div key={url} className="relative w-full h-48">
                <Image
                  width={100}
                  height={100}
                  src={url}
                  alt="Seçilen Fotoğraf Önizlemesi"
                  className="object-contain w-full h-full rounded-md"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleRemoveClick(url);
                  }}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs hover:bg-red-600"
                >
                  X
                </button>
              </div>
            ))}
            {previewUrls.length < maxFiles && (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-rose-500 transition-colors text-rose-500 font-semibold text-sm"
              >
                + Fotoğraf Ekle
              </button>
            )}
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="cursor-pointer text-center w-full flex flex-col items-center"
          >
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-600">
              <span className="font-semibold text-rose-500">
                Fotoğraf Yükleyin
              </span>{" "}
              veya buraya sürükleyin
            </p>
            <p className="text-xs text-gray-500">{hintText}</p>
          </button>
        )}
      </div>

    </div>
  );
}
