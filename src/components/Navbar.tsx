"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoaded, userId } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "WHO'S LEE?", href: "/#profile" },
    { name: "주요 저서", href: "/#books" },
    { name: "강의 현황", href: "/#class" },
    { name: "비즈니스", href: "/#business" },
    { name: "비밀노트", href: "/knowledge" },
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
            <Link href="/" className="flex flex-col hover:opacity-80 transition-opacity">
              <span className="text-lg md:text-xl font-bold text-white tracking-widest uppercase truncate whitespace-nowrap">
                LEE YOUNG-HYUN
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1 transition-colors text-sm font-medium tracking-wide whitespace-nowrap ${link.name === '비밀노트' ? 'text-brand font-bold' : 'text-gray-300 hover:text-brand'}`}
              >
                {link.name === '비밀노트' && (
                  <svg className="w-3.5 h-3.5 mb-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0110 0v4"></path>
                  </svg>
                )}
                {link.name}
              </Link>
            ))}
            
            {isLoaded && !userId && (
              <div className="flex gap-4 items-center pl-4 border-l border-white/10">
                <Link href="/sign-in" className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">로그인</Link>
                <Link href="/sign-up" className="text-sm font-bold text-gray-300 hover:text-white transition-colors whitespace-nowrap">회원가입</Link>
              </div>
            )}
            {isLoaded && userId && (
              <div className="pl-4 border-l border-white/10 flex items-center">
                <UserButton appearance={{ elements: { userButtonAvatarBox: "w-9 h-9 border-2 border-brand" } }} />
              </div>
            )}

            <a 
              href="/#contact" 
              className="ml-4 px-6 py-2.5 bg-brand text-black font-bold text-sm tracking-wide rounded-full hover:bg-brand-hover shadow-[0_0_15px_rgba(255,140,0,0.3)] hover:shadow-[0_0_25px_rgba(255,140,0,0.5)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
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
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-2 px-3 py-3 rounded-md text-lg font-medium border-b border-white/5 ${link.name === '비밀노트' ? 'text-brand font-bold' : 'text-gray-200 hover:text-brand'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name === '비밀노트' && (
                  <svg className="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0110 0v4"></path>
                  </svg>
                )}
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 pb-2 flex flex-col gap-3">
              {isLoaded && !userId && (
                <>
                  <Link href="/sign-in" className="block text-center px-3 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5" onClick={() => setMobileMenuOpen(false)}>로그인</Link>
                  <Link href="/sign-up" className="block text-center px-3 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5" onClick={() => setMobileMenuOpen(false)}>회원가입</Link>
                </>
              )}
              {isLoaded && userId && (
                <div className="flex justify-center items-center py-2 gap-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300 font-medium">프로필 관리</span>
                  <UserButton appearance={{ elements: { userButtonAvatarBox: "w-10 h-10 border-2 border-brand" } }} />
                </div>
              )}
            </div>

            <a 
              href="/#contact" 
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
