"use client";

import React from "react";

interface FormTextInputProps {
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  hintText?: string;
  className?: string;
  error?: string;
  isClicked?: boolean;
  type?: "text" | "email" | "tel" | "number" | "password";
  isVisible?: boolean;
  name?: string;
  ref?: React.Ref<HTMLInputElement>;
}

export default function FormTextInput({
  id,
  placeholder,
  value,
  onChange,
  maxLength,
  hintText,
  className,
  error,
  isClicked,
  type = "text",
  isVisible = true,
  name,
  ref,
}: FormTextInputProps) {
  if (!isVisible) return null;

  const baseInputStyles =
    "p-3 border rounded-lg w-full text-sm focus:ring-rose-500 focus:border-rose-500 shadow-sm focus:outline-none";
  const errorStyles =
    error && isClicked
      ? "border-red-500 focus:border-red-500"
      : "border-gray-300";

  return (
    <div className="mb-4">
      <input
        type={type}
        id={id}
        name={name}
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className={`${baseInputStyles} ${errorStyles} ${className || ""}`}
      />
      {hintText && !error && (
        <p className="mt-1 text-xs text-gray-500">{hintText}</p>
      )}
      {error && isClicked && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
