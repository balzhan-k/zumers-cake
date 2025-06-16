"use client";

import React, { useState, useEffect } from "react";

interface PhotoUploadFieldProps {
  value: File | null;
  onChange: (file: File | null) => void;
  hintText: string;
  maxSizeMB: number;
  acceptedFileTypes: string[];
}

export default function PhotoUploadField({
  value,
  onChange,
  hintText = "PNG, JPG, GIF",
  maxSizeMB = 10,
  acceptedFileTypes = ["image/png", "image/jpeg", "image/gif"],
}: PhotoUploadFieldProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!value) {
      setPreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(value);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [value]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      if (file.size > maxSizeMB * 1024 * 1024) {
        alert(`Dosya boyutu ${maxSizeMB}MB'tan büyük olamaz.`);
        e.target.value = "";
        onChange(null);
        return;
      }
      if (!file.type.startsWith("image/")) {
        alert("Lütfen bir resim dosyası seçiniz.");
        e.target.value = "";
        onChange(null);
        return;
      }
      onChange(file);
    } else {
      onChange(null);
    }
  };

  const handleRemoveClick = () => {
    onChange(null);
    const inputElement = document.getElementById(
      "photoUpload"
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = "";
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-rose-500 transition-colors">
        <label
          htmlFor="photoUpload"
          className="cursor-pointer text-center w-full"
        >
          <input
            type="file"
            id="photoUpload"
            accept={acceptedFileTypes.join(",")}
            className="hidden"
            onChange={handleFileChange}
          />

          {previewUrl && value ? (
            <div className="relative w-full h-48 mb-4">
              <img
                src={previewUrl}
                alt="Seçilen Fotoğraf Önizlemesi"
                className="object-contain w-full h-full rounded-md"
              />
              <p className="text-gray-600 text-sm mt-2">
                Seçilen Dosya: {value.name} ({Math.round(value.size / 1024)} KB)
              </p>
            </div>
          ) : (
            <>
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
            </>
          )}
        </label>
      </div>

      {value && (
        <button
          type="button"
          onClick={handleRemoveClick}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm"
        >
          Fotoğrafı Kaldır
        </button>
      )}
    </div>
  );
}
