"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "WHO'S LEE?", href: "#profile" },
    { name: "주요 저서", href: "#books" },
    { name: "AI 마케팅 강의", href: "#class" },
    { name: "비즈니스", href: "#business" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-white tracking-widest uppercase">
                Stop Thinking, Start Action.
              </span>
              <span className="text-xs md:text-sm text-brand font-medium">이영현 교수</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-brand transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="ml-4 px-6 py-2.5 bg-brand text-black font-bold text-sm tracking-wide rounded-full hover:bg-brand-hover shadow-[0_0_15px_rgba(255,140,0,0.3)] hover:shadow-[0_0_25px_rgba(255,140,0,0.5)] transition-all transform hover:-translate-y-0.5"
            >
              특강 및 협업 제안
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 absolute w-full left-0 top-full shadow-2xl">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-brand block px-3 py-3 rounded-md text-lg font-medium border-b border-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="text-black bg-brand hover:bg-brand-hover block px-3 py-4 mt-4 rounded-xl text-lg font-bold text-center shadow-[0_0_15px_rgba(255,140,0,0.3)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              특강 및 협업 제안
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
