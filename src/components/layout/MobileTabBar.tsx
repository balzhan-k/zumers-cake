"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  UserIcon,
  PhotoIcon,
  ClipboardDocumentListIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

interface TabItem {
  href: string;
  icon: React.ElementType;
  label: string;
}

const tabItems: TabItem[] = [
  { href: "/", icon: HomeIcon, label: "Ana Sayfa" },
  { href: "/about", icon: UserIcon, label: "Hakkında" },
  { href: "/gallery", icon: PhotoIcon, label: "Galeri" },
  { href: "/order", icon: ClipboardDocumentListIcon, label: "Sipariş Formu" },
  { href: "/contact", icon: PhoneIcon, label: "İletişim" },
];

export default function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-stone-50 border-t flex justify-around items-center h-16 md:hidden z-50">
      {tabItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center ${
            pathname === item.href ? "text-rose-600" : "text-gray-500"
          }`}
        >
          <item.icon className="h-6 w-6" />
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
