import Link from "next/link";

interface GalleryLinkProps {
  className?: string;
  onClick?: () => void;
  variant?: "default" | "button";
}

export default function GalleryLink({
  className = "",
  onClick,
  variant = "default",
}: GalleryLinkProps) {
  const baseStyles =
    "text-foreground/80 hover:text-foreground transition-colors"; 
  const buttonStyles =
    "inline-block bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors";

  return (
    <Link
      href="/gallery"
      className={`${
        variant === "button" ? buttonStyles : baseStyles
      } ${className}`}
      onClick={onClick}
    >
      Galeri
    </Link>
  );
}
