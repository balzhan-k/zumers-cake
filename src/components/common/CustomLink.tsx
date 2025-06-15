import Link from "next/link";

interface CustomLinkProps {
  className?: string;
  onClick?: () => void;
  variant?: "default" | "button";
  href: string;

  color?: string;
  children: React.ReactNode;
}

export default function CustomLink({
  className = "",
  onClick,
  variant = "default",
  href,
  color,
  children,
}: CustomLinkProps) {
  const baseStyles =
    "text-foreground/80 hover:text-foreground transition-colors text-base md:text-md";
  const buttonStyles =
    "inline-block bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors text-base md:text-md";

  return (
    <Link
      href={href}
      className={`
        ${variant === "button" ? buttonStyles : baseStyles}
        ${className}
        ${color ? `text-${color}` : ""}
        `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
