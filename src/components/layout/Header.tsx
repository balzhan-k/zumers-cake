"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-foreground/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground">
          Zumers&apos;s Cake
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/menu"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
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
  );
}
