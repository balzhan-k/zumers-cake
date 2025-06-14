"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import LogoLink from "../common/LogoLink";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="border-b border-foreground/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <LogoLink />
          <nav className="hidden md:flex items-center gap-6">
            <Navbar />
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
