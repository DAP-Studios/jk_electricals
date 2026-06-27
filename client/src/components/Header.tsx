import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import namelogo from "../assets/namelogo.png";
import namelogob from "../assets/namelogob.png";

const CATALOG_PATH = "/JK_Electricals_Catalog.pdf"; // Place the PDF at: public/catalog.pdf

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroScrollThreshold = 3;
      setIsScrolled(window.scrollY >= heroScrollThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Brands", href: "/brands" },
    // { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isTransparent = !isScrolled;

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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
      <nav className={`font-inter tracking-tight uppercase font-semibold text-sm fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent border-transparent shadow-none'
          : 'bg-white/95 backdrop-blur-md dark:bg-slate-950/90'
      } ${isScrolled ? "border-b border-slate-200/70 dark:border-slate-800 shadow-sm shadow-black/5 dark:shadow-none" : ""}`}>
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">

          <Link href="/" className="inline-flex items-center cursor-pointer">
            <img
              src={isTransparent ? namelogo : namelogob}
              alt="JK ELECTRICALS"
              className="h-8 w-auto mr-2"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-gutter">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${
                  location === item.href
                    ? isTransparent
                      ? "text-white border-b-2 border-white pb-1"
                      : "text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400 pb-1"
                    : isTransparent
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900"
                } active:opacity-80 active:scale-95 transition-all duration-200 px-2`}
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
              className="hidden md:inline-flex items-center gap-2 bg-secondary text-on-secondary font-button text-button px-6 py-3 rounded hover:bg-on-secondary-fixed-variant transition-colors shadow-sm"
            >
              <Download size={16} />
              Download Catalog
            </a>
            <button
              className={`md:hidden p-2 ${isTransparent ? "text-white" : "text-on-background"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
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
                className="inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary font-button text-button px-6 py-3 rounded hover:bg-on-secondary-fixed-variant transition-colors shadow-sm w-full mt-4"
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
