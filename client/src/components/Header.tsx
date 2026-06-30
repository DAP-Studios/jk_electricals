import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import namelogob from "../assets/namelogob.png";
import { trackConversion } from "@/lib/analytics";

const CATALOG_PATH = "/JK_Electricals_Catalog.pdf"; // Place the PDF at: public/catalog.pdf

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Brands", href: "/brands" },
    // { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackConversion("catalog_download", "header_catalog");
    const link = document.createElement("a");
    link.href = CATALOG_PATH;
    link.download = "JK_Electricals_Catalog.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 text-sm font-semibold uppercase tracking-tight shadow-sm shadow-black/5 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          <Link href="/" className="inline-flex items-center cursor-pointer">
            <img
              src={namelogob}
              alt="JK ELECTRICALS"
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded px-3 py-2 transition-colors ${
                  location === item.href
                    ? "bg-slate-100 text-slate-950"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Desktop download button */}
            <a
              href={CATALOG_PATH}
              onClick={handleDownload}
              className="hidden items-center gap-2 rounded bg-[#005eb2] px-5 py-2.5 text-sm font-black text-white shadow-sm transition-colors hover:bg-[#004788] md:inline-flex"
            >
              <Download size={16} />
              Catalog
            </a>
            <button
              className="rounded p-2 text-slate-900 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="px-8 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block ${
                    location === item.href
                      ? "text-blue-700 dark:text-blue-400 font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile download button */}
              <a
                href={CATALOG_PATH}
                onClick={(e) => { handleDownload(e); setIsMenuOpen(false); }}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded bg-[#005eb2] px-6 py-3 text-sm font-black text-white shadow-sm transition-colors hover:bg-[#004788]"
              >
                <Download size={16} />
                Download Catalog
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
