"use client";
import { useState } from "react";

import NavbarLinks from "./NavbarLinks";
import LogoLink from "../common/LogoLink";

export default function Header() {

  return (
    <>
      <header className="border-b border-foreground/10 bg-stone-50 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <LogoLink />
          <nav className="hidden md:flex items-center gap-6">
            <NavbarLinks />
          </nav>
         
        </div>
      </header>


    </>
  );
}
