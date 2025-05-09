"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from "lucide-react"; // Using X for close icon
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    setMobileMenuOpen(false);
    return () => window.removeEventListener("resize", handleResize);
  }, [pathname]);

  return (
    <header className="header-home">
      <div className="container-home">
        <div className="header-content-home">
          <Link href="/" className="logo-home">
            <img src="/images/logo.jpeg" width={30} alt="" />
            한평생교육원
          </Link>
          <nav className="hidden md:block">
            <ul className="nav-menu-home">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link-home ${
                      pathname === link.href ? "active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn-home"
              aria-label="메뉴 열기/닫기"
            >
              {mobileMenuOpen ? (
                <X size={28} className="text-gray-700" />
              ) : (
                <i className="fas fa-bars text-xl text-gray-700"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Tailwind styled for consistency */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-16 px-4">
          <ul className="flex flex-col items-center gap-y-6 mt-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-2 text-2xl font-medium text-gray-700 hover:text-blue-600 ${
                    pathname === link.href ? "text-blue-600 font-semibold" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
