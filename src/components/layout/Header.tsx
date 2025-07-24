"use client";
import LogoLink from "../common/LogoLink";
import Link from "next/link";
import CustomLink from "../common/CustomLink";
import { usePathname } from "next/navigation";

enum Page {
  home = "Ana Sayfa",
  about = "Hakkında",
  gallery = "Galeri",
  order = "Sipariş Oluştur",
  contact = "İletişim",
}

interface NavItemProps {
  key: string;
  href: string;
  text: string;
  onClick?: () => void;
  isCustomLink?: boolean;
}

function NavbarLinks(): NavItemProps[] {
  return [
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
}

export default function Header() {
  const pathname = usePathname();
  const navbarLinks = NavbarLinks();

  return (
    <>
      <header className="border-b border-foreground/10 bg-stone-50 sticky top-0 z-50">
        <div className="container mx-auto px-10 h-16 flex items-center justify-between">
          <LogoLink />
          <nav className="hidden md:flex items-center gap-6">
            {navbarLinks.map((item) =>
              item.isCustomLink ? (
                <CustomLink
                  key={item.key}
                  href={item.href}
                  variant="default"
                  isActive={pathname === item.href}
                >
                  {item.text}
                </CustomLink>
              ) : (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`text-foreground/80 transition-colors text-base md:text-md ${
                    pathname === item.href
                      ? "text-rose-600"
                      : "hover:text-rose-500"
                  }`}
                >
                  {item.text}
                </Link>
              )
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
