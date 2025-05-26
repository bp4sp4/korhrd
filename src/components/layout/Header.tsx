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
    <header className="bg-white shadow-sm header-home">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.jpeg"
              width={30}
              height={30}
              alt="한평생교육원 로고"
            />
            <span className="text-lg font-semibold text-gray-900">
              한평생교육원
            </span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-gray-600 hover:text-blue-600 transition-colors ${
                      pathname === link.href ? "text-blue-600 font-medium" : ""
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
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label="메뉴 열기/닫기"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <i className="fas fa-bars text-xl"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-16">
          <div className="px-4 py-2">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 text-lg font-medium ${
                      pathname === link.href
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
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
