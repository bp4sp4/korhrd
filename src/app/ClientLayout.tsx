"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState, useEffect } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const [showHeader, setShowHeader] = useState(!isMainPage);

  useEffect(() => {
    if (isMainPage) {
      // 3초 후에 헤더 표시 (로고 애니메이션과 동일한 타이밍)
      const timer = setTimeout(() => {
        setShowHeader(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isMainPage]);

  return (
    <>
      {showHeader && <Header />}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
