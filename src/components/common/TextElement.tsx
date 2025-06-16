import React from "react";
import clsx from "clsx"; 

interface TextElementProps {
  variant: TextElementVariant;
  children: React.ReactNode;
  className?: string;
}

type TextElementVariant = "h1" | "h3" | "p";


export default function TextElement({
  variant,
  children,
  className,
}: TextElementProps) {

  const baseStyles : Record<TextElementVariant, string> = {
    h1: "text-xl font-bold mb-6 md:text-center", 
    h3: "text-md font-bold mb-4",               
    p: "text-base mb-4", 
  }

  const Tag = variant;

  return (
  <Tag className={clsx(baseStyles[variant], className)}>
    {children}
  </Tag>
  );
}
