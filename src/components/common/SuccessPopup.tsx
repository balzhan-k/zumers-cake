import React from "react";

interface SuccessPopupProps {
  message: string;

  isVisible: boolean;
}

export default function SuccessPopup({
  message,

  isVisible,
}: SuccessPopupProps) {
  if (!isVisible) return null;

  return (
    <div className="flex items-center gap-2 bg-rose-500 text-white p-4 rounded-lg shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ marginRight: "8px" }}
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>{message}</span>
    </div>
  );
}
