"use client";

import LogoLink from "../common/LogoLink";
import Navbar from "./Navbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <LogoLink />
            <p className="mt-4 text-2xl md:text-4xl font-thin italic text-foreground/80 text-center md:text-left font-dancing">
              Hayallerinizin tadını <br /> çıkarmaya hazır olun.
            </p>
          </div>
          <div className="flex flex-row justify-center md:justify-start gap-10 lg:gap-20">
            {/* Navigation */}
            <div className="flex flex-col items-start md:items-start">
              <h3 className="font-semibold mb-4">Hızlı Bağlantılar</h3>
              <nav className="flex flex-col items-start gap-2">
                <Navbar />
              </nav>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-start md:items-start">
              <h3 className="font-semibold mb-4">İletişim</h3>
              <div className="space-y-2 text-foreground/80">
                <p>
                  <a
                    href="tel:+905326738292"
                    className="hover:underline hover:text-blue-800"
                  >
                    +90 532 673 82 92
                  </a>
                </p>

                <p>
                  <a
                    href="mailto:zumersener@gmail.com"
                    className="hover:underline hover:text-blue-800"
                  >
                    zumersener@gmail.com
                  </a>
                </p>
                <p>
                  İzmir, Türkiye
                  <br />
                  Gaziemir, 35000
                </p>
              </div>
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
