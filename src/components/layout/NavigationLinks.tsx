import Link from "next/link";

interface NavigationLinksProps {
  onLinkClick?: () => void;
}

export default function NavigationLinks({ onLinkClick }: NavigationLinksProps) {
  return (
    <>
      <Link
        href="/"
        className="text-foreground/80 hover:text-foreground transition-colors"
        onClick={onLinkClick}
      >
        Ana Sayfa
      </Link>
      <Link
        href="/about"
        className="text-foreground/80 hover:text-foreground transition-colors"
        onClick={onLinkClick}
      >
        Hakkında
      </Link>
      <Link
        href="/gallery"
        className="text-foreground/80 hover:text-foreground transition-colors"
        onClick={onLinkClick}
      >
        Galeri
      </Link>
      <Link
        href="/order"
        className="text-foreground/80 hover:text-foreground transition-colors"
        onClick={onLinkClick}
      >
        Sipariş Oluştur
      </Link>
      <Link
        href="/contact"
        className="text-foreground/80 hover:text-foreground transition-colors"
        onClick={onLinkClick}
      >
        İletişim
      </Link>
    </>
  );
}
