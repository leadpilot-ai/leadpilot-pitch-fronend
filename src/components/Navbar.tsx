"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white tracking-tight">
          LeadPilot AI
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#how-it-works" className="text-white hover:text-accent transition-colors">
            How It Works
          </Link>
          <Link href="#demo" className="text-white hover:text-accent transition-colors">
            Demo
          </Link>
          <Link href="#pricing" className="text-white hover:text-accent transition-colors">
            Pricing
          </Link>
          <Link
            href="#demo"
            className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md"
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary shadow-xl border-t border-white/10 flex flex-col items-center py-6 space-y-6">
          <Link
            href="#how-it-works"
            className="text-white hover:text-accent text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="#demo"
            className="text-white hover:text-accent text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Demo
          </Link>
          <Link
            href="#pricing"
            className="text-white hover:text-accent text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="#demo"
            className="bg-accent text-white px-6 py-3 rounded-full font-bold w-[200px] text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
