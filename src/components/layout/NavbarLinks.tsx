import Link from "next/link";
import GalleryLink from "../common/GalleryLink";
import OrderLink from "../common/OrderLink";

interface NavbarLinksProps {
  onLinkClick?: () => void;
}
enum Page {
  home = "Ana Sayfa",
  about = "Hakkında",
  gallery = "Galeri",
  order = "Sipariş Oluştur",
  contact = "İletişim",
}

export default function NavbarLinks({ onLinkClick }: NavbarLinksProps) {
  return (
    <>
      <Link
        href="/"
        className="text-foreground/80 hover:text-foreground transition-colors font-"
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
      <GalleryLink />
      <OrderLink />
      <Link
        href="/contact"
        className="text-foreground/80 hover:text-foreground transition-colors"
        onClick={onLinkClick}
      >
        {Page.contact}
      </Link>
    </>
  );
}
