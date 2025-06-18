"use client";

interface CustomFormButtonProps {
  text: string;
  value: string;
  onClick?: (value: string) => void;
  isSelected?: boolean;
  className?: string;
}

export default function CustomFormButton({
  text,
  value,
  onClick,
  isSelected,
  className,
}: CustomFormButtonProps) {
  const baseStyles = "px-4 py-2 rounded-full border transition-colors";
  const selectedStyles =
    "bg-rose-500 border-rose-500 text-white hover:bg-rose-600";

  return (
    <button
      type="button"
      className={`
    ${baseStyles}
    ${isSelected ? selectedStyles : ""}
    ${className}
    `}
      onClick={() => onClick?.(value)}
    >
      {text}
    </button>
  );
}
