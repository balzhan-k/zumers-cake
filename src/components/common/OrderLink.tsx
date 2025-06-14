import Link from "next/link";

interface OrderLinkProps {
  className?: string;
  onClick?: () => void;
  variant?: "default" | "button";
}

export default function OrderLink({
  className = "",
  onClick,
  variant = "default",
}: OrderLinkProps) {
  const baseStyles =
    "text-foreground/80 hover:text-foreground transition-colors";
  const buttonStyles =
    "inline-block bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors";

  return (
    <Link
      href="/order"
      className={`${
        variant === "button" ? buttonStyles : baseStyles
      } ${className}`}
      onClick={onClick}
    >
      Sipariş Oluştur
    </Link>
  );
}
