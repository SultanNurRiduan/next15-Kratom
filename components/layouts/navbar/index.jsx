"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NAVBAR from "@/constants/navbar";
import Logo from "@/components/elements/logo";
import HamburgerButton from "@/components/elements/HamburgerButton";
import MobileMenu from "./mobileMenu";


const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-green-50/30 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex space-x-6">
          {NAVBAR.map((item, i) => {
            const isActive = pathname === item.path;
            return (
              <Link
                href={item.path}
                key={i}
                className={`relative group text-lg font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-primary-dark"
                    : "text-primary hover:text-primary-dark"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            );
          })}
        </div>
        <div className="md:hidden">
          <HamburgerButton isOpen={menuOpen} onClick={toggleMenu} />
        </div>
      </div>
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </nav>
  );
};

export default Navbar;
