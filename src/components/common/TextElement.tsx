import React from "react";
import clsx from "clsx";

interface TextElementProps {
  id?: string;
  variant: TextElementVariant;
  children: React.ReactNode;
  className?: string;
}

type TextElementVariant = "h1" | "h3" | "p";

export default function TextElement({
  id,
  variant,
  children,
  className,
}: TextElementProps) {
  const baseStyles: Record<TextElementVariant, string> = {
    h1: "text-xl font-bold md:text-center",
    h3: "text-md font-bold",
    p: "text-sm md:text-md lg:text-lg font-regular",
  };

  const Tag = variant;

  return (
    <Tag id={id} className={clsx(baseStyles[variant], className)}>
      {children}
    </Tag>
  );
}
