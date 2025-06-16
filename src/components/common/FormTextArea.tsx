import React from "react";

interface FormTextAreaProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  rows: number;
  className?: string;
}

export default function FormTextArea({
  id,
  placeholder,
  value,
  onChange,
  maxLength,
  rows,
  className,
}: FormTextAreaProps) {
  const baseStyles =
    "p-3 border rounded-lg w-full text-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 shadow-sm";

  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      maxLength={maxLength}
      rows={rows}
      className={`${baseStyles} ${className || ""}`}
    />
  );
}
