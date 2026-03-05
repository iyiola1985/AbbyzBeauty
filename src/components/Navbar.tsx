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
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/abbys_logo-61c73344-3bb7-421f-b3e4-44a7e36a3d8f.png"
            alt="Abbyz Beautyy"
            width={50}
            height={50}
            className="h-10 w-auto"
          />
          <span className="font-serif text-xl font-semibold text-[#1a1a1a] hidden sm:block">
            Abbyz Beautyy
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1a1a1a]/80 hover:text-[#E91E8C] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="px-5 py-2 bg-[#E91E8C] text-white text-sm font-medium rounded-full hover:bg-[#d0187a] transition-all duration-300 hover:shadow-lg hover:shadow-[#E91E8C]/30"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#1a1a1a]"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[#1a1a1a] hover:text-[#E91E8C] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 py-3 text-center bg-[#E91E8C] text-white rounded-lg font-medium"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
