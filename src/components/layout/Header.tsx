"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationLinks from "./NavigationLinks";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="border-b border-foreground/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-foreground flex items-center"
          >
            <Image
              src="/images/logo/logo.jpg"
              alt="Zumers Cake Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            Zumer's Cake
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavigationLinks />
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
