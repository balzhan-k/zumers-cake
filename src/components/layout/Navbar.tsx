import Link from "next/link";

interface NavbarProps {
  onLinkClick?: () => void;
}
enum Page {
  home = "Ana Sayfa",
  about = "Hakkında",
  gallery = "Galeri",
  order = "Sipariş Oluştur",
  contact = "İletişim",
}

export default function Navbar({ onLinkClick }: NavbarProps) {
  return (
    <>
      <Link
        href="/"
        className="text-foreground/80 hover:text-foreground transition-colors"
        onClick={onLinkClick}
      >
        {Page.home}
      </Link>
      <Link
        href="/about"
        className="text-foreground/80 hover:text-foreground transition-colors"
        onClick={onLinkClick}
      >
        {Page.about}
      </Link>
      <Link
        href="/gallery"
        className="text-foreground/80 hover:text-foreground transition-colors"
        onClick={onLinkClick}
      >
        {Page.gallery}
      </Link>

      <Link
        href="/contact"
        className="text-foreground/80 hover:text-foreground transition-colors"
        onClick={onLinkClick}
      >
        {Page.contact}
      </Link>
      <Link
        href="/order"
        className="inline-block bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors"
        onClick={onLinkClick}
      >
        {Page.order}
      </Link>
    </>
  );
}
