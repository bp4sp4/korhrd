"use client";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "홈" },
    { href: "/clinic", label: "이력서/자소서 클리닉" },
    { href: "/matching", label: "취업처 매칭" },
    { href: "/interview", label: "면접예상질의응답" },
    { href: "/login", label: "로그인" },
  ];

  return (
    <header className="shadow-sm header-home">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              width={36}
              height={36}
              alt="한평생교육원 로고"
            />
            <span className="text-xl font-bold tracking-tight">
              한평생교육원
            </span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-black/90 hover:text-black-200 transition-colors ${
                      pathname === link.href ? "text-black-200 font-bold" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-white hover:text-yellow-200 hover:bg-blue-600"
            aria-label="메뉴 열기/닫기"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-b from-blue-700 to-blue-400 z-40 pt-16 text-white">
          <div className="px-4 py-2">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 text-lg font-bold ${
                      pathname === link.href
                        ? "text-yellow-200"
                        : "text-white/90 hover:text-yellow-200"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
