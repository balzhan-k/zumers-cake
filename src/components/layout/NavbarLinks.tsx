import Link from "next/link";
import CustomLink from "../common/CustomLink";

enum Page {
  home = "Ana Sayfa",
  about = "Hakkında",
  gallery = "Galeri",
  order = "Sipariş Oluştur",
  contact = "İletişim",
}

interface NavbarLinksProps {
  onLinkClick?: () => void;
}

interface NavItemProps {
  key: string;
  href: string;
  text: string;
  onClick?: () => void;
  isCustomLink?: boolean;
}

export default function NavbarLinks({ onLinkClick }: NavbarLinksProps) {
  const navbarLinks: NavItemProps[] = [
    { key: "home", href: "/", text: Page.home },
    { key: "about", href: "/about", text: Page.about },
    {
      key: "gallery",
      href: "/gallery",
      text: Page.gallery,
      isCustomLink: true,
    },
    { key: "order", href: "/order", text: Page.order, isCustomLink: true },
    { key: "contact", href: "/contact", text: Page.contact },
  ];
  return (
    <>
      {navbarLinks.map((item) =>
        item.isCustomLink ? (
          <CustomLink
            key={item.key}
            href={item.href}
            variant="default"
            onClick={onLinkClick}
          >
            {item.text}
          </CustomLink>
        ) : (
          <Link
            key={item.key}
            href={item.href}
            className="text-foreground/80 hover:text-foreground transition-colors text-base md:text-md hover:text-rose-500"
            onClick={onLinkClick}
          >
            {item.text}
          </Link>
        )
      )}
    </>
  );
}
