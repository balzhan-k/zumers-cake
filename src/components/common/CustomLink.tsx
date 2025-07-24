import Link from "next/link";

interface CustomLinkProps {
  className?: string;
  onClick?: () => void;
  variant?: "default" | "button";
  href: string;

  color?: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export default function CustomLink({
  className = "",
  onClick,
  variant = "default",
  href,
  color,
  children,
  isActive,
}: CustomLinkProps) {
  const baseStyles =
    "text-foreground/80 transition-colors text-base md:text-md";
  const buttonStyles =
    "inline-block bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-200 transition-colors text-base md:text-md";

  return (
    <Link
      href={href}
      className={`
        ${variant === "button" ? buttonStyles : baseStyles}
        ${className}
        ${color ? `text-${color}` : ""}
        ${isActive ? "text-rose-600" : "hover:text-rose-500"}
        `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
