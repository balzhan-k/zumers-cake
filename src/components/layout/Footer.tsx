"use client";

import Link from "next/link";
import Image from "next/image";
import NavigationLinks from "./NavigationLinks";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo/logo.jpg"
                alt="Zumers Cake Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold">Zumers Cake</span>
            </Link>
            <p className="text-foreground/80 text-center md:text-left">
              Hayallerinizin tadını çıkarmaya hazır olun.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4">Hızlı Bağlantılar</h3>
            <nav className="flex flex-col items-center md:items-start gap-2">
              <NavigationLinks />
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4">İletişim</h3>
            <div className="space-y-2 text-foreground/80">
              <p>📞 (Telefon numarası)</p>
              <p>📧 (E-posta adresi)</p>
              <p>📍 (Adres bilgisi)</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-foreground/10 text-center text-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Zumers Cake. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
