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
      className={`fixed top-0 left-0 z-50 w-full px-4 transition-all duration-500 md:px-6 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div
        className={`relative mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border px-5 py-3 backdrop-blur-xl transition-all duration-500 md:px-7 ${
          isScrolled
            ? "border-white/20 bg-primary/85 shadow-2xl shadow-black/25"
            : "border-white/10 bg-primary/45 shadow-lg shadow-black/10"
        }`}
      >
        <Link href="/" className="text-2xl font-bold tracking-tight text-white transition-opacity duration-300 hover:opacity-90">
          LeadPilot AI
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link href="#how-it-works" className="text-sm font-medium text-white/85 transition-all duration-300 hover:text-white">
            How It Works
          </Link>
          <Link href="#demo" className="text-sm font-medium text-white/85 transition-all duration-300 hover:text-white">
            Demo
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-white/85 transition-all duration-300 hover:text-white">
            Pricing
          </Link>
          <Link
            href="#bookdemo"
            className="rounded-full border border-accent/40 bg-accent px-5 py-2.5 text-sm font-semibold text-primary shadow-[0_8px_20px_rgba(37,211,102,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-[0_12px_26px_rgba(37,211,102,0.32)]"
          >
            Book Demo
          </Link>
        </div>

        <button
          className="rounded-lg border border-white/20 bg-white/5 p-2 text-white transition-colors hover:bg-white/10 focus:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
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

        {isMobileMenuOpen && (
          <div className="absolute left-0 top-[calc(100%+0.6rem)] w-full rounded-2xl border border-white/15 bg-primary/95 p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col items-center gap-5">
              <Link
                href="#how-it-works"
                className="text-lg text-white/90 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#demo"
                className="text-lg text-white/90 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </Link>
              <Link
                href="#pricing"
                className="text-lg text-white/90 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#bookdemo"
                className="w-[200px] rounded-full border border-accent/40 bg-accent px-6 py-3 text-center font-bold text-primary transition-all duration-300 hover:bg-accent/90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
