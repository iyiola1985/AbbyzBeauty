"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Price List" },
    { href: "#booking", label: "Booking" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/abbys_logo-61c73344-3bb7-421f-b3e4-44a7e36a3d8f.png"
            alt="Abbyz Beautyy"
            width={80}
            height={80}
            className={`h-14 w-auto sm:h-16 md:h-[4.5rem] lg:h-20 ${scrolled ? "drop-shadow-sm" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"}`}
            priority
          />
          <span className={`unifrakturcook-bold text-2xl sm:text-2xl md:text-3xl hidden sm:block ${scrolled ? "text-[#1a1a1a]" : "text-white drop-shadow-lg"}`}>
            Abbyz Beautyy
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`playfair-display-sc-bold text-base lg:text-lg hover:text-[#E91E8C] transition-colors duration-300 ${scrolled ? "text-[#1a1a1a]/90" : "text-white/95 drop-shadow-md"}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="px-6 py-3 bg-[#E91E8C] text-white text-base lg:text-lg font-medium rounded-full hover:bg-[#d0187a] transition-all duration-300 hover:shadow-lg hover:shadow-[#E91E8C]/40"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-3 ${scrolled ? "text-[#1a1a1a]" : "text-white"}`}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-4 playfair-display-sc-bold text-lg text-[#1a1a1a] hover:text-[#E91E8C] transition-colors border-b border-[#F5E1E6]/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 py-4 text-center bg-[#E91E8C] text-white rounded-xl oi-regular text-lg"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
