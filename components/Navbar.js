"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/image/logo.png"
            width={130}
            height={40}
            alt="Space Organics Logo"
            className="cursor-pointer object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a
            href="#reviews"
            className="text-gray-700 font-semibold hover:text-green-700 transition-colors"
          >
            Reviews
          </a>
          <a
            href="#contact-form"
            className="bg-[#0D9785] hover:bg-green-800 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
