import React from "react";
import clsx from "clsx";

interface TextElementProps {
  id?: string;
  variant: TextElementVariant;
  children: React.ReactNode;
  className?: string;
}

type TextElementVariant = "h2" | "h3" | "p";

export default function TextElement({
  id,
  variant,
  children,
  className,
}: TextElementProps) {
  const baseStyles: Record<TextElementVariant, string> = {
    h2: "text-xl md:text-2xl font-bold ",
    h3: "text-md md:text-lg font-bold",
    p: "text-sm md:text-md py-2 lg:text-lg font-regular",
  };

  const Tag = variant;

  return (
    <Tag id={id} className={clsx(baseStyles[variant], className)}>
      {children}
    </Tag>
  );
}
